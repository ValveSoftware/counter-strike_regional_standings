### Roster Details<br />
Team Name: HEROIC Academy<br />
Roster: HOLY, Hrdina, Muciek, St0m4k, Yoghi<br />
Global Rank: [164](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [114]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  781.2<br />
<br />
Final Rank Value (781.2) = Starting Rank Value (727.0) + Head To Head Adjustments (54.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.416[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 727.0
- 400 + ( ( 0.173 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 727.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1609 | 2026-01-17 | STATE            | L   | 0.905      | -            | -                | -                | -         |    -7.26 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            9 |     1638 | 2026-01-16 | megoshort        | W   | 0.900      | 0.338        | 0.004 (0.001)    | 0.121 (0.037)    | 1 (0.900) |    17.20 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            8 |     1643 | 2026-01-16 | SemperFi         | W   | 0.900      | 0.338        | 0.006 (0.002)    | 0.305 (0.093)    | 1 (0.900) |    19.88 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            7 |     1652 | 2026-01-16 | Sashi            | L   | 0.899      | -            | -                | -                | -         |    -2.48 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            6 |     1660 | 2026-01-16 | Hemmaplan        | W   | 0.899      | 0.338        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.899) |     3.43 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            5 |     1665 | 2026-01-16 | Tricked          | L   | 0.899      | -            | -                | -                | -         |    -3.47 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            4 |     1949 | 2025-12-18 | The Huns         | L   | 0.707      | -            | -                | -                | -         |    -2.90 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            3 |     1958 | 2025-12-18 | Friendly Campers | L   | 0.705      | -            | -                | -                | -         |    -2.21 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            2 |     1973 | 2025-12-17 | The Huns         | W   | 0.699      | 0.339        | 0.022 (0.005)    | 0.425 (0.101)    | 1 (0.699) |    19.50 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            1 |     1984 | 2025-12-17 | HYPERSPIRIT      | W   | 0.698      | 0.339        | 0.000 (0.000)    | 0.317 (0.075)    | 1 (0.698) |    12.54 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
