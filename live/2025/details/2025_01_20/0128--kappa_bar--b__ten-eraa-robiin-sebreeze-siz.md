### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, Siz<br />
Global Rank: [128](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [93]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  787.5<br />
<br />
Final Rank Value (787.5) = Starting Rank Value (790.5) + Head To Head Adjustments (-3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.196[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 790.5
- 400 + ( ( 0.197 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 790.5


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
|           10 |      657 | 2024-11-22 | Alliance        | L   | 0.811      | -            | -                | -                | -         |    -9.08 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            9 |      678 | 2024-11-21 | Johnny Speeds   | L   | 0.806      | -            | -                | -                | -         |    -4.43 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            8 |      688 | 2024-11-21 | Kario Mart      | W   | 0.804      | 0.377        | 0.009 (0.003)    | 0.036 (0.011)    | 1 (0.804) |     5.44 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            7 |      770 | 2024-11-16 | Northern Lights | W   | 0.772      | 0.262        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.772) |     4.55 | eraa, robiin, SeBreeZe, Siz, Twinkey |
|            6 |     1007 | 2024-11-07 | Metizport       | L   | 0.714      | -            | -                | -                | -         |    -1.37 | eraa, robiin, SeBreeZe, Siz, virree  |
|            5 |     1065 | 2024-11-04 | Lilmix          | W   | 0.693      | 0.143        | 0.001 (0.000)    | 0.059 (0.006)    | 0 (0.000) |     3.91 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            4 |     1262 | 2024-10-26 | EYEBALLERS      | L   | 0.631      | -            | -                | -                | -         |    -8.92 | eraa, Lekr0, robiin, Sapec, SeBreeZe |
|            3 |     1494 | 2024-10-13 | megoshort       | W   | 0.546      | 0.143        | 0.000 (0.000)    | 0.027 (0.002)    | 0 (0.000) |     2.66 | eraa, Ludwig, robiin, Siz, virree    |
|            2 |     1573 | 2024-10-09 | megoshort       | W   | 0.519      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     2.55 | eraa, robiin, SeBreeZe, Siz, virree  |
|            1 |     1614 | 2024-10-08 | Knaeskydd       | W   | 0.512      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.62 | eraa, robiin, SeBreeZe, Siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,151.47)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.819 | $2,831.00      | $2,319.32       |
| 2024-11-16 |      0.772 | $1,005.00      | $776.16         |
| 2024-11-09 |      0.726 | $1,455.00      | $1,055.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
