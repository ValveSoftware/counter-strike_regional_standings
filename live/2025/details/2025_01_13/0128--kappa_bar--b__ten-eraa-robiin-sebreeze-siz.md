### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, Siz<br />
Global Rank: [128](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [93]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  787.3<br />
<br />
Final Rank Value (787.3) = Starting Rank Value (790.1) + Head To Head Adjustments (-2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.366[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.196[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 790.1
- 400 + ( ( 0.197 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 790.1


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
|           10 |      644 | 2024-11-22 | Alliance        | L   | 0.853      | -            | -                | -                | -         |    -9.52 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            9 |      665 | 2024-11-21 | Johnny Speeds   | L   | 0.848      | -            | -                | -                | -         |    -4.36 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            8 |      675 | 2024-11-21 | Kario Mart      | W   | 0.846      | 0.377        | 0.009 (0.003)    | 0.035 (0.011)    | 1 (0.846) |     5.71 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            7 |      757 | 2024-11-16 | Northern Lights | W   | 0.814      | 0.262        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.814) |     4.79 | eraa, robiin, SeBreeZe, Siz, Twinkey |
|            6 |      994 | 2024-11-07 | Metizport       | L   | 0.756      | -            | -                | -                | -         |    -1.50 | eraa, robiin, SeBreeZe, Siz, virree  |
|            5 |     1052 | 2024-11-04 | Lilmix          | W   | 0.735      | 0.143        | 0.001 (0.000)    | 0.059 (0.006)    | 0 (0.000) |     4.13 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            4 |     1249 | 2024-10-26 | EYEBALLERS      | L   | 0.673      | -            | -                | -                | -         |    -9.43 | eraa, Lekr0, robiin, Sapec, SeBreeZe |
|            3 |     1481 | 2024-10-13 | megoshort       | W   | 0.588      | 0.143        | 0.000 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     2.87 | eraa, Ludwig, robiin, Siz, virree    |
|            2 |     1560 | 2024-10-09 | megoshort       | W   | 0.561      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     2.77 | eraa, robiin, SeBreeZe, Siz, virree  |
|            1 |     1601 | 2024-10-08 | Knaeskydd       | W   | 0.554      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.76 | eraa, robiin, SeBreeZe, Siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,373.89)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.861 | $2,831.00      | $2,438.33       |
| 2024-11-16 |      0.814 | $1,005.00      | $818.40         |
| 2024-11-09 |      0.768 | $1,455.00      | $1,117.16       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
