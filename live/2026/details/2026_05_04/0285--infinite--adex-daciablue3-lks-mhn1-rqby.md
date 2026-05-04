### Roster Details<br />
Team Name: INFINITE<br />
Roster: adeX, DaciaBlue3, LkS, mhN1, RQBY<br />
Global Rank: [285](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [177]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  583.9<br />
<br />
Final Rank Value (583.9) = Starting Rank Value (578.5) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.199[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 578.5
- 400 + ( ( 0.096 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 578.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     3071 | 2026-02-25 | Betclic       | L   | 0.747      | -            | -                | -                | -         |    -0.65 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|           16 |     3087 | 2026-02-25 | HEROIC        | L   | 0.745      | -            | -                | -                | -         |    -0.15 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|           15 |     3105 | 2026-02-24 | zajezdzacze   | W   | 0.741      | 0.354        | 0.000 (0.000)    | 0.296 (0.078)    | 1 (0.741) |    14.00 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|           14 |     3113 | 2026-02-24 | Hermine       | W   | 0.740      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.740) |     6.50 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|           13 |     3134 | 2026-02-24 | zajezdzacze   | L   | 0.739      | -            | -                | -                | -         |    -9.07 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|           12 |     4612 | 2026-01-16 | aimclub       | L   | 0.481      | -            | -                | -                | -         |    -2.12 | adeX, LkS, mhN1, RQBY, welnic     |
|           11 |     4618 | 2026-01-16 | Prestige      | W   | 0.481      | 0.338        | 0.001 (0.000)    | 0.048 (0.008)    | 1 (0.481) |    10.84 | adeX, LkS, mhN1, RQBY, welnic     |
|           10 |     4635 | 2026-01-16 | STATE         | L   | 0.480      | -            | -                | -                | -         |    -0.77 | adeX, LkS, mhN1, RQBY, welnic     |
|            9 |     4642 | 2026-01-16 | Johnny Speeds | L   | 0.479      | -            | -                | -                | -         |    -0.19 | adeX, LkS, mhN1, RQBY, welnic     |
|            8 |     4654 | 2026-01-16 | AaB           | L   | 0.479      | -            | -                | -                | -         |    -0.27 | adeX, LkS, mhN1, RQBY, welnic     |
|            7 |     4964 | 2025-12-17 | Grindas       | L   | 0.280      | -            | -                | -                | -         |    -4.61 | adeX, LkS, mhN1, RQBY, welnic     |
|            6 |     4976 | 2025-12-17 | illwill       | L   | 0.279      | -            | -                | -                | -         |    -4.43 | adeX, LkS, mhN1, RQBY, welnic     |
|            5 |     5292 | 2025-11-29 | OG            | L   | 0.160      | -            | -                | -                | -         |    -0.21 | LkS, mhN1, ra1n, RQBY, welnic     |
|            4 |     5388 | 2025-11-25 | Nemesis       | L   | 0.132      | -            | -                | -                | -         |    -1.79 | LkS, mhN1, ra1n, RQBY, welnic     |
|            3 |     5430 | 2025-11-24 | Sangal        | L   | 0.125      | -            | -                | -                | -         |    -1.06 | LkS, mhN1, ra1n, RQBY, welnic     |
|            2 |     5549 | 2025-11-20 | G2 Ares       | L   | 0.100      | -            | -                | -                | -         |    -0.29 | LkS, mhN1, ra1n, RQBY, welnic     |
|            1 |     5572 | 2025-11-20 | Nexus         | L   | 0.098      | -            | -                | -                | -         |    -0.36 | LkS, mhN1, ra1n, RQBY, welnic     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
