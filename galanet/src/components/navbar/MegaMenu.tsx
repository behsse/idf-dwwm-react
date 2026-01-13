import { Link } from "react-router";

interface SubCategory {
    title: string;
    items: {
        id: string;
        label: string;
    }[];
}

interface MegaMenuProps {
    title: string;
    subCategories: SubCategory[];
}

const MegaMenu = ({ title, subCategories }: MegaMenuProps) => {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-lg flex w-full">
            <div className="bg-slate-800 text-center w-1/6 py-8 shrink-0">
                <h3 className="text-slate-50 text-sm">{title}</h3>
            </div>
            <div className="flex flex-wrap py-8 px-10 gap-20 overflow-hidden">
                {subCategories.map((subCategory, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <h4 className="text-slate-50 font-bold text-lg">{subCategory.title}</h4>
                        <ul className="flex flex-col gap-4">
                            {subCategory.items.map((item) => (
                                <li key={item.id}>
                                    <Link to={`/${item.id}`} className="text-slate-200 hover:text-purple-400 text-sm font-light">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MegaMenu