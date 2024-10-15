### Roster Details<br />
Team Name: Rebels<br />
Roster: casey, Flayy, innocent, kisserek, olimp<br />
Global Rank: [61](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [43]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  974.5<br />
<br />
Final Rank Value (974.5) = Starting Rank Value (932.4) + Head To Head Adjustments (42.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.401[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.274<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 932.4
- 400 + ( ( 0.274 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 932.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |      370 | 2024-10-01 | Apogee            | L   | 1.000      | -            | -                | -                | -         |   -16.97 | casey, Flayy, innocent, kisserek, olimp |
|           56 |      653 | 2024-09-24 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -12.00 | casey, Flayy, innocent, kisserek, olimp |
|           55 |      658 | 2024-09-24 | ex-Enterprise     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.04 | casey, Flayy, innocent, kisserek, olimp |
|           54 |      691 | 2024-09-23 | Souls Heart       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.08 | casey, Flayy, innocent, kisserek, olimp |
|           53 |      770 | 2024-09-20 | Insilio           | W   | 1.000      | 0.500        | 0.038 (0.019)    | 0.690 (0.345)    | 0 (0.000) |    15.59 | casey, Flayy, innocent, kisserek, olimp |
|           52 |      941 | 2024-09-14 | Sashi             | W   | 0.995      | 0.384        | 0.100 (0.038)    | 0.634 (0.242)    | 0 (0.000) |    18.23 | casey, Flayy, innocent, kisserek, olimp |
|           51 |      965 | 2024-09-14 | Zero Tenacity     | W   | 0.992      | 0.384        | 0.117 (0.045)    | 0.861 (0.329)    | 0 (0.000) |    21.91 | casey, Flayy, innocent, kisserek, olimp |
|           50 |      994 | 2024-09-13 | Johnny Speeds     | W   | 0.986      | 0.384        | 0.115 (0.043)    | 0.982 (0.372)    | 0 (0.000) |    19.25 | casey, Flayy, innocent, kisserek, olimp |
|           49 |     1006 | 2024-09-12 | Betera            | L   | 0.981      | -            | -                | -                | -         |   -25.50 | casey, Flayy, innocent, kisserek, olimp |
|           48 |     1020 | 2024-09-12 | DMS               | L   | 0.980      | -            | -                | -                | -         |   -20.86 | casey, Flayy, innocent, kisserek, olimp |
|           47 |     1060 | 2024-09-11 | Into the Breach   | W   | 0.973      | 0.384        | -                | 0.640 (0.239)    | 0 (0.000) |    14.22 | casey, Flayy, kisserek, olimp, SZPERO   |
|           46 |     1179 | 2024-09-06 | GUN5              | L   | 0.940      | -            | -                | -                | -         |   -12.25 | casey, Flayy, kisserek, olimp, SZPERO   |
|           45 |     1214 | 2024-09-05 | Qiang             | W   | 0.934      | -            | -                | -                | 0 (0.000) |     5.07 | casey, Flayy, kisserek, olimp, SZPERO   |
|           44 |     1337 | 2024-09-01 | Partizan          | L   | 0.906      | -            | -                | -                | -         |   -19.02 | casey, Flayy, innocent, kisserek, olimp |
|           43 |     1512 | 2024-08-27 | FAVBET            | W   | 0.874      | 0.384        | 0.044 (0.015)    | 0.887 (0.298)    | -         |    13.38 | casey, Flayy, innocent, kisserek, olimp |
|           42 |     1682 | 2024-08-23 | Permitta          | W   | 0.847      | -            | -                | -                | -         |    11.53 | casey, Flayy, innocent, kisserek, olimp |
|           41 |     1695 | 2024-08-23 | Johnny Speeds     | W   | 0.846      | 0.143        | 0.115 (0.014)    | -                | -         |    16.68 | casey, Flayy, innocent, kisserek, olimp |
|           40 |     1727 | 2024-08-22 | OG                | L   | 0.839      | -            | -                | -                | -         |   -13.31 | casey, Flayy, innocent, kisserek, olimp |
|           39 |     1757 | 2024-08-21 | 9 Pandas          | L   | 0.834      | -            | -                | -                | -         |    -9.04 | casey, Flayy, innocent, kisserek, olimp |
|           38 |     1792 | 2024-08-21 | Zero Tenacity     | W   | 0.832      | 0.143        | 0.117 (0.014)    | -                | -         |    15.48 | casey, Flayy, innocent, kisserek, olimp |
|           37 |     1825 | 2024-08-20 | Rhyno             | W   | 0.826      | 0.384        | -                | 0.481 (0.153)    | -         |    13.54 | casey, Flayy, innocent, kisserek, olimp |
|           36 |     1955 | 2024-08-15 | fnatic            | L   | 0.794      | -            | -                | -                | -         |    -4.14 | casey, Flayy, innocent, kisserek, olimp |
|           35 |     2023 | 2024-08-13 | DASH              | W   | 0.779      | -            | -                | -                | -         |     3.48 | casey, Flayy, innocent, kisserek, olimp |
|           34 |     2201 | 2024-08-07 | Sangal            | L   | 0.740      | -            | -                | -                | -         |    -2.72 | casey, Flayy, innocent, kisserek, olimp |
|           33 |     2223 | 2024-08-07 | TALON             | L   | 0.739      | -            | -                | -                | -         |   -20.59 | casey, Flayy, innocent, kisserek, olimp |
|           32 |     2271 | 2024-08-05 | SINNERS           | L   | 0.728      | -            | -                | -                | -         |    -7.30 | casey, Flayy, innocent, kisserek, olimp |
|           31 |     2503 | 2024-07-30 | RUSH B            | L   | 0.688      | -            | -                | -                | -         |   -14.31 | casey, Flayy, innocent, kisserek, olimp |
|           30 |     2698 | 2024-07-24 | SAW               | W   | 0.647      | 0.500        | 0.281 (0.091)    | 0.694 (0.224)    | -         |    18.66 | casey, Flayy, innocent, kisserek, olimp |
|           29 |     2712 | 2024-07-24 | 9INE              | L   | 0.645      | -            | -                | -                | -         |    -9.92 | casey, Flayy, innocent, kisserek, olimp |
|           28 |     2755 | 2024-07-23 | ex-Enterprise     | W   | 0.638      | -            | -                | -                | -         |     7.56 | casey, Flayy, innocent, kisserek, olimp |
|           27 |     2772 | 2024-07-22 | Insilio           | W   | 0.633      | 0.371        | -                | 0.690 (0.162)    | -         |    10.04 | casey, Flayy, innocent, kisserek, olimp |
|           26 |     2873 | 2024-07-19 | B8                | L   | 0.612      | -            | -                | -                | -         |    -6.56 | casey, Flayy, innocent, kisserek, olimp |
|           25 |     2938 | 2024-07-18 | Illuminar         | W   | 0.605      | -            | -                | -                | -         |     7.18 | casey, Flayy, innocent, kisserek, olimp |
|           24 |     3000 | 2024-07-17 | 9INE              | W   | 0.599      | 0.500        | 0.095 (0.028)    | 0.686 (0.205)    | -         |     9.77 | casey, Flayy, innocent, kisserek, olimp |
|           23 |     3087 | 2024-07-15 | Apogee            | L   | 0.587      | -            | -                | -                | -         |   -12.31 | casey, Flayy, innocent, kisserek, olimp |
|           22 |     3097 | 2024-07-15 | Sangal            | L   | 0.585      | -            | -                | -                | -         |    -2.85 | casey, Flayy, innocent, kisserek, olimp |
|           21 |     3136 | 2024-07-12 | ex-Enterprise     | W   | 0.566      | -            | -                | -                | -         |     6.98 | casey, Flayy, innocent, kisserek, olimp |
|           20 |     3173 | 2024-07-10 | Belarus           | W   | 0.554      | -            | -                | -                | -         |     0.81 | casey, Flayy, innocent, kisserek, olimp |
|           19 |     3185 | 2024-07-09 | 500               | W   | 0.548      | -            | -                | -                | -         |     4.84 | casey, Flayy, innocent, kisserek, olimp |
|           18 |     3221 | 2024-07-08 | Verdant           | W   | 0.538      | -            | -                | -                | -         |     6.33 | casey, Flayy, innocent, kisserek, olimp |
|           17 |     3411 | 2024-06-13 | Sampi             | L   | 0.374      | -            | -                | -                | -         |    -5.64 | casey, Flayy, innocent, kisserek, olimp |
|           16 |     3436 | 2024-06-12 | Qiang             | L   | 0.368      | -            | -                | -                | -         |    -7.96 | casey, Flayy, innocent, kisserek, olimp |
|           15 |     3478 | 2024-06-10 | Permitta          | W   | 0.355      | -            | -                | -                | -         |     5.37 | casey, Flayy, innocent, kisserek, olimp |
|           14 |     3517 | 2024-06-09 | Rhyno             | L   | 0.348      | -            | -                | -                | -         |    -5.50 | casey, Flayy, kisserek, olimp, SZPERO   |
|           13 |     3642 | 2024-06-07 | BLEED             | W   | 0.335      | -            | -                | -                | -         |     7.63 | casey, Flayy, innocent, kisserek, olimp |
|           12 |     3762 | 2024-06-05 | 9INE              | W   | 0.322      | 0.500        | 0.095 (0.015)    | -                | -         |     5.67 | casey, Flayy, innocent, kisserek, olimp |
|           11 |     3952 | 2024-05-30 | Qiang             | W   | 0.282      | -            | -                | -                | -         |     2.80 | casey, Flayy, innocent, kisserek, olimp |
|           10 |     3992 | 2024-05-29 | UNiTY             | L   | 0.273      | -            | -                | -                | -         |    -3.00 | casey, Flayy, innocent, kisserek, olimp |
|            9 |     4079 | 2024-05-25 | kONO              | W   | 0.245      | -            | -                | -                | -         |     2.56 | casey, Flayy, innocent, kisserek, olimp |
|            8 |     4193 | 2024-05-21 | UNiTY             | L   | 0.219      | -            | -                | -                | -         |    -2.28 | casey, Flayy, innocent, kisserek, olimp |
|            7 |     4216 | 2024-05-20 | The Prodigies     | W   | 0.215      | -            | -                | -                | -         |     1.23 | casey, Flayy, innocent, kisserek, olimp |
|            6 |     4285 | 2024-05-18 | B8                | L   | 0.199      | -            | -                | -                | -         |    -2.07 | casey, Flayy, innocent, kisserek, olimp |
|            5 |     4315 | 2024-05-17 | Gaimin Gladiators | W   | 0.193      | -            | -                | -                | -         |     2.85 | casey, Flayy, innocent, kisserek, olimp |
|            4 |     4807 | 2024-04-28 | Aurora            | L   | 0.065      | -            | -                | -                | -         |    -0.34 | casey, Flayy, innocent, kisserek, olimp |
|            3 |     4856 | 2024-04-26 | MIBR              | W   | 0.052      | -            | -                | -                | 1 (0.052) |     1.51 | casey, Flayy, innocent, kisserek, olimp |
|            2 |     4858 | 2024-04-25 | Rooster           | W   | 0.051      | -            | -                | -                | 1 (0.051) |     0.42 | casey, Flayy, innocent, kisserek, olimp |
|            1 |     5011 | 2024-04-19 | Apogee            | L   | 0.008      | -            | -                | -                | -         |    -0.16 | casey, Flayy, innocent, kisserek, olimp |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,063.76)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-14 |      0.995 | $10,000.00     | $9,945.26       |
| 2024-07-25 |      0.652 | $3,000.00      | $1,956.11       |
| 2024-06-13 |      0.375 | $1,089.00      | $408.53         |
| 2024-06-09 |      0.348 | $2,000.00      | $696.20         |
| 2024-05-18 |      0.201 | $2,000.00      | $402.38         |
| 2024-04-28 |      0.066 | $10,000.00     | $655.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
