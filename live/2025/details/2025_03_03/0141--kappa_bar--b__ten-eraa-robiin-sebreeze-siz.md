### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, Siz<br />
Global Rank: [141](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [94]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  707.8<br />
<br />
Final Rank Value (707.8) = Starting Rank Value (707.7) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.323[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.118[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.7
- 400 + ( ( 0.160 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 707.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1357 | 2024-11-22 | Alliance        | L   | 0.526      | -            | -                | -                | -         |    -5.15 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            9 |     1378 | 2024-11-21 | Johnny Speeds   | L   | 0.521      | -            | -                | -                | -         |    -4.23 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            8 |     1388 | 2024-11-21 | Kario Mart      | W   | 0.518      | 0.377        | 0.004 (0.001)    | 0.025 (0.005)    | 1 (0.518) |     4.54 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            7 |     1471 | 2024-11-16 | Northern Lights | W   | 0.487      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.487) |     3.87 | eraa, robiin, SeBreeZe, Siz, Twinkey |
|            6 |     1713 | 2024-11-07 | Metizport       | L   | 0.429      | -            | -                | -                | -         |    -1.82 | eraa, robiin, SeBreeZe, Siz, virree  |
|            5 |     1772 | 2024-11-04 | Lilmix          | W   | 0.407      | 0.143        | 0.000 (0.000)    | 0.035 (0.002)    | 0 (0.000) |     3.15 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            4 |     1973 | 2024-10-26 | EYEBALLERS      | L   | 0.345      | -            | -                | -                | -         |    -4.68 | eraa, Lekr0, robiin, Sapec, SeBreeZe |
|            3 |     2206 | 2024-10-13 | megoshort       | W   | 0.261      | 0.143        | 0.000 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     1.74 | eraa, Ludwig, robiin, Siz, virree    |
|            2 |     2289 | 2024-10-09 | megoshort       | W   | 0.234      | 0.143        | 0.000 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     1.56 | eraa, robiin, SeBreeZe, Siz, virree  |
|            1 |     2336 | 2024-10-08 | Knaeskydd       | W   | 0.227      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.08 | eraa, robiin, SeBreeZe, Siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,642.32)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.534 | $2,831.00      | $1,511.84       |
| 2024-11-16 |      0.487 | $1,005.00      | $489.50         |
| 2024-11-09 |      0.441 | $1,455.00      | $640.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
