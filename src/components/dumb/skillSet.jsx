import React from "react";

export default function SkillSet() {
  return (
    <section id="skill-set" className="mt-8 md:mt-28">
      <div className="container-fluid md:px-16">
        <div className="overflow-x-auto">
          <table className="table table-compact md:table-normal md:table-fixed w-full bg-transparent text-white">
            <thead>
              <tr className="border-b-2">
                <th></th>
                <th>SkillSet</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover border-b-2 font-bold">
                <td>Basic</td>
                <td className="overflow-clip">
                  <ul className="flex flex-col md:flex-row gap-4">
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      HTML
                    </li>
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      CSS
                    </li>
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      Javascript
                    </li>
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      JQuery
                    </li>
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      PHP
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="hover border-b-2 font-bold">
                <td>PHP Framework</td>
                <td>
                  <ul className="flex flex-col md:flex-row gap-4">
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      Codeigniter
                    </li>
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      Laravel
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="hover border-b-2 font-bold">
                <td>JS Framework / Library</td>
                <td>
                  <ul className="flex flex-col md:flex-row gap-4">
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      React JS
                    </li>
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      Vite
                    </li>
                  </ul>
                </td>
              </tr>
              <tr className="hover border-b-2 font-bold">
                <td>CSS Framework</td>
                <td>
                  <ul className="flex flex-col md:flex-row gap-4">
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      Bootstrap
                    </li>
                    <li className="border-2 border-[#DC9752] rounded-full px-2 md:px-7 py-2 text-center">
                      Tailwind CSS
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
