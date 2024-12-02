### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, Siz<br />
Global Rank: [130](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [94]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  797.6<br />
<br />
Final Rank Value (797.6) = Starting Rank Value (798.9) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.352[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.219[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 798.9
- 400 + ( ( 0.199 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 798.9


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
|           10 |      198 | 2024-11-22 | Alliance        | L   | 1.000      | -            | -                | -                | -         |   -11.58 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            9 |      219 | 2024-11-21 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -4.18 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            8 |      229 | 2024-11-21 | Kario Mart      | W   | 1.000      | 0.377        | 0.006 (0.002)    | 0.038 (0.014)    | 1 (1.000) |     9.10 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            7 |      311 | 2024-11-16 | Northern Lights | W   | 1.000      | 0.262        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.57 | eraa, robiin, SeBreeZe, Siz, Twinkey |
|            6 |      548 | 2024-11-07 | Metizport       | L   | 1.000      | -            | -                | -                | -         |    -2.13 | eraa, robiin, SeBreeZe, Siz, virree  |
|            5 |      606 | 2024-11-04 | Lilmix          | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.069 (0.010)    | 0 (0.000) |     5.29 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            4 |      803 | 2024-10-26 | EYEBALLERS      | L   | 0.952      | -            | -                | -                | -         |   -14.47 | eraa, Lekr0, robiin, Sapec, SeBreeZe |
|            3 |     1035 | 2024-10-13 | megoshort       | W   | 0.868      | 0.143        | 0.000 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     4.41 | eraa, Ludwig, robiin, Siz, virree    |
|            2 |     1114 | 2024-10-09 | megoshort       | W   | 0.841      | 0.143        | 0.000 (0.000)    | 0.033 (0.004)    | 0 (0.000) |     4.17 | eraa, robiin, SeBreeZe, Siz, virree  |
|            1 |     1155 | 2024-10-08 | Knaeskydd       | W   | 0.834      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.52 | eraa, robiin, SeBreeZe, Siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,291.00)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      1.000 | $2,831.00      | $2,831.00       |
| 2024-11-16 |      1.000 | $1,005.00      | $1,005.00       |
| 2024-11-09 |      1.000 | $1,455.00      | $1,455.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
