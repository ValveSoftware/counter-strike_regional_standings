### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, kensizor, npl<br />
Global Rank: [21](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [17]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  1403.7<br />
<br />
Final Rank Value (1403.7) = Starting Rank Value (1366.1) + Head To Head Adjustments (37.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.597[<sup>1</sup>](#table2)
- Bounty Collected: 0.643[<sup>2</sup>](#table1)
- Opponent Network: 0.191[<sup>2</sup>](#table1)
- LAN Wins: 0.612[<sup>2</sup>](#table1)

The average of these factors is 0.511<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1366.1
- 400 + ( ( 0.511 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1366.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      561 | 2026-02-17 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -5.14 | alex666, esenthial, kensizor, npl, s1zzi     |
|           35 |      599 | 2026-02-16 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -9.12 | alex666, esenthial, kensizor, npl, s1zzi     |
|           34 |      646 | 2026-02-15 | HEROIC            | W   | 1.000      | 1.000        | 0.443 (0.443)    | 0.433 (0.433)    | 1 (1.000) |    17.64 | alex666, esenthial, kensizor, npl, s1zzi     |
|           33 |      683 | 2026-02-14 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -1.63 | alex666, esenthial, kensizor, npl, s1zzi     |
|           32 |     1233 | 2026-01-29 | paiN              | L   | 0.986      | -            | -                | -                | -         |   -19.61 | alex666, esenthial, kensizor, npl, segukawa  |
|           31 |     1253 | 2026-01-28 | NRG               | L   | 0.980      | -            | -                | -                | -         |   -17.00 | alex666, esenthial, kensizor, npl, segukawa  |
|           30 |     2105 | 2025-12-07 | Natus Vincere     | L   | 0.633      | -            | -                | -                | -         |    -3.86 | alex666, esenthial, headtr1ck, kensizor, npl |
|           29 |     2129 | 2025-12-06 | paiN              | W   | 0.626      | 1.000        | 0.369 (0.231)    | 0.179 (0.112)    | 1 (0.626) |     6.37 | alex666, esenthial, headtr1ck, kensizor, npl |
|           28 |     2157 | 2025-12-05 | Vitality          | L   | 0.619      | -            | -                | -                | -         |    -0.98 | alex666, esenthial, headtr1ck, kensizor, npl |
|           27 |     2174 | 2025-12-04 | MOUZ              | L   | 0.614      | -            | -                | -                | -         |    -1.16 | alex666, esenthial, headtr1ck, kensizor, npl |
|           26 |     2183 | 2025-12-04 | Falcons           | W   | 0.613      | 1.000        | 1.000 (0.613)    | 0.448 (0.275)    | 1 (0.613) |    17.88 | alex666, esenthial, headtr1ck, kensizor, npl |
|           25 |     2227 | 2025-12-01 | 3DMAX             | W   | 0.595      | 0.809        | 0.401 (0.193)    | 0.298 (0.144)    | 1 (0.595) |     9.81 | alex666, esenthial, headtr1ck, kensizor, npl |
|           24 |     2244 | 2025-11-30 | Natus Vincere     | L   | 0.588      | -            | -                | -                | -         |    -3.34 | alex666, esenthial, headtr1ck, kensizor, npl |
|           23 |     2277 | 2025-11-29 | fnatic            | W   | 0.581      | 0.809        | -                | 0.504 (0.237)    | 1 (0.581) |     7.06 | alex666, esenthial, headtr1ck, kensizor, npl |
|           22 |     2298 | 2025-11-29 | Liquid            | W   | 0.580      | 0.809        | 0.441 (0.207)    | 0.230 (0.108)    | 1 (0.580) |     8.76 | alex666, esenthial, headtr1ck, kensizor, npl |
|           21 |     2362 | 2025-11-26 | Legacy            | W   | 0.560      | 0.624        | 0.620 (0.216)    | -                | 1 (0.560) |     8.93 | alex666, esenthial, headtr1ck, kensizor, npl |
|           20 |     2386 | 2025-11-25 | PARIVISION        | W   | 0.553      | 0.624        | 1.000 (0.345)    | 0.622 (0.214)    | 1 (0.553) |    16.61 | alex666, esenthial, headtr1ck, kensizor, npl |
|           19 |     2407 | 2025-11-24 | The Huns          | W   | 0.548      | 0.624        | -                | 0.425 (0.145)    | 1 (0.548) |     3.39 | alex666, esenthial, headtr1ck, kensizor, npl |
|           18 |     2425 | 2025-11-24 | M80               | L   | 0.545      | -            | -                | -                | -         |    -9.92 | alex666, esenthial, headtr1ck, kensizor, npl |
|           17 |     3176 | 2025-10-31 | Aurora            | L   | 0.385      | -            | -                | -                | -         |    -1.43 | alex666, esenthial, headtr1ck, kensizor, npl |
|           16 |     3209 | 2025-10-29 | Legacy            | W   | 0.373      | 1.000        | 0.620 (0.231)    | -                | 1 (0.373) |     6.16 | alex666, esenthial, headtr1ck, kensizor, npl |
|           15 |     3241 | 2025-10-28 | paiN              | L   | 0.367      | -            | -                | -                | -         |    -7.16 | alex666, esenthial, headtr1ck, kensizor, npl |
|           14 |     3273 | 2025-10-27 | 3DMAX             | W   | 0.361      | 1.000        | 0.401 (0.144)    | 0.298 (0.108)    | -         |     7.08 | alex666, esenthial, headtr1ck, kensizor, npl |
|           13 |     3331 | 2025-10-26 | Astralis          | W   | 0.354      | 1.000        | 0.468 (0.166)    | 0.375 (0.133)    | -         |     8.99 | alex666, esenthial, headtr1ck, kensizor, npl |
|           12 |     3702 | 2025-10-15 | FaZe              | L   | 0.277      | -            | -                | -                | -         |    -2.00 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|           11 |     3727 | 2025-10-14 | HEROIC            | L   | 0.271      | -            | -                | -                | -         |    -3.10 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|           10 |     4199 | 2025-10-02 | FURIA             | L   | 0.194      | -            | -                | -                | -         |    -0.26 | alex666, esenthial, headtr1ck, kensizor, npl |
|            9 |     4254 | 2025-10-01 | GamerLegion       | L   | 0.186      | -            | -                | -                | -         |    -1.25 | alex666, esenthial, headtr1ck, kensizor, npl |
|            8 |     4290 | 2025-09-30 | G2                | W   | 0.179      | -            | -                | -                | -         |     4.26 | alex666, esenthial, headtr1ck, kensizor, npl |
|            7 |     4334 | 2025-09-29 | HOTU              | L   | 0.172      | -            | -                | -                | -         |    -2.46 | alex666, esenthial, headtr1ck, kensizor, npl |
|            6 |     4361 | 2025-09-28 | Legacy            | W   | 0.166      | -            | -                | -                | -         |     2.56 | alex666, esenthial, headtr1ck, kensizor, npl |
|            5 |     4608 | 2025-09-21 | Ninjas in Pyjamas | L   | 0.119      | -            | -                | -                | -         |    -2.26 | alex666, esenthial, headtr1ck, kensizor, npl |
|            4 |     4630 | 2025-09-20 | Gentle Mates      | W   | 0.114      | -            | -                | -                | -         |     2.34 | alex666, esenthial, headtr1ck, kensizor, npl |
|            3 |     4640 | 2025-09-20 | Passion UA        | W   | 0.112      | -            | -                | -                | -         |     1.36 | alex666, esenthial, headtr1ck, kensizor, npl |
|            2 |     4677 | 2025-09-19 | OG                | W   | 0.105      | -            | -                | -                | -         |     0.24 | alex666, esenthial, headtr1ck, kensizor, npl |
|            1 |     4712 | 2025-09-18 | PARIVISION        | L   | 0.098      | -            | -                | -                | -         |    -0.12 | alex666, esenthial, headtr1ck, kensizor, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,659.61)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $18,750.00     | $18,750.00      |
| 2026-01-30 |      0.994 | $2,500.00      | $2,485.19       |
| 2025-12-14 |      0.681 | $20,000.00     | $13,622.07      |
| 2025-11-01 |      0.394 | $62,500.00     | $24,602.13      |
| 2025-10-19 |      0.305 | $5,000.00      | $1,525.58       |
| 2025-10-02 |      0.194 | $6,500.00      | $1,261.55       |
| 2025-09-21 |      0.120 | $70,000.00     | $8,413.10       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
