### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, Siz<br />
Global Rank: [135](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [93]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  708.2<br />
<br />
Final Rank Value (708.2) = Starting Rank Value (708.0) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.126[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.0
- 400 + ( ( 0.162 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 708.0


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
|           10 |     1269 | 2024-11-22 | Alliance        | L   | 0.571      | -            | -                | -                | -         |    -5.75 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            9 |     1290 | 2024-11-21 | Johnny Speeds   | L   | 0.566      | -            | -                | -                | -         |    -4.48 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            8 |     1300 | 2024-11-21 | Kario Mart      | W   | 0.564      | 0.377        | 0.004 (0.001)    | 0.027 (0.006)    | 1 (0.564) |     4.88 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            7 |     1383 | 2024-11-16 | Northern Lights | W   | 0.532      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.532) |     4.18 | eraa, robiin, SeBreeZe, Siz, Twinkey |
|            6 |     1625 | 2024-11-07 | Metizport       | L   | 0.474      | -            | -                | -                | -         |    -1.91 | eraa, robiin, SeBreeZe, Siz, virree  |
|            5 |     1684 | 2024-11-04 | Lilmix          | W   | 0.453      | 0.143        | 0.000 (0.000)    | 0.040 (0.003)    | 0 (0.000) |     3.46 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            4 |     1885 | 2024-10-26 | EYEBALLERS      | L   | 0.391      | -            | -                | -                | -         |    -5.36 | eraa, Lekr0, robiin, Sapec, SeBreeZe |
|            3 |     2118 | 2024-10-13 | megoshort       | W   | 0.306      | 0.143        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     2.04 | eraa, Ludwig, robiin, Siz, virree    |
|            2 |     2201 | 2024-10-09 | megoshort       | W   | 0.279      | 0.143        | 0.000 (0.000)    | 0.016 (0.001)    | 0 (0.000) |     1.86 | eraa, robiin, SeBreeZe, Siz, virree  |
|            1 |     2248 | 2024-10-08 | Knaeskydd       | W   | 0.272      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.29 | eraa, robiin, SeBreeZe, Siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,882.05)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.579 | $2,831.00      | $1,640.11       |
| 2024-11-16 |      0.532 | $1,005.00      | $535.04         |
| 2024-11-09 |      0.486 | $1,455.00      | $706.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
