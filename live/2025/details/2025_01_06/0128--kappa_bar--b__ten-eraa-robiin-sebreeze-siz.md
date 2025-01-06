### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, Siz<br />
Global Rank: [128](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [93]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  782.7<br />
<br />
Final Rank Value (782.7) = Starting Rank Value (787.2) + Head To Head Adjustments (-4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.196[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.2
- 400 + ( ( 0.196 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 787.2


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
|           10 |      603 | 2024-11-22 | Alliance        | L   | 0.900      | -            | -                | -                | -         |   -10.30 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            9 |      624 | 2024-11-21 | Johnny Speeds   | L   | 0.894      | -            | -                | -                | -         |    -4.62 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            8 |      634 | 2024-11-21 | Kario Mart      | W   | 0.892      | 0.377        | 0.008 (0.003)    | 0.035 (0.012)    | 1 (0.892) |     6.07 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            7 |      716 | 2024-11-16 | Northern Lights | W   | 0.861      | 0.262        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.861) |     5.12 | eraa, robiin, SeBreeZe, Siz, Twinkey |
|            6 |      953 | 2024-11-07 | Metizport       | L   | 0.802      | -            | -                | -                | -         |    -1.69 | eraa, robiin, SeBreeZe, Siz, virree  |
|            5 |     1011 | 2024-11-04 | Lilmix          | W   | 0.781      | 0.143        | 0.001 (0.000)    | 0.059 (0.007)    | 0 (0.000) |     4.42 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            4 |     1208 | 2024-10-26 | EYEBALLERS      | L   | 0.719      | -            | -                | -                | -         |   -11.60 | eraa, Lekr0, robiin, Sapec, SeBreeZe |
|            3 |     1440 | 2024-10-13 | megoshort       | W   | 0.634      | 0.143        | 0.000 (0.000)    | 0.028 (0.003)    | 0 (0.000) |     3.14 | eraa, Ludwig, robiin, Siz, virree    |
|            2 |     1519 | 2024-10-09 | megoshort       | W   | 0.607      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     3.04 | eraa, robiin, SeBreeZe, Siz, virree  |
|            1 |     1560 | 2024-10-08 | Knaeskydd       | W   | 0.600      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.93 | eraa, robiin, SeBreeZe, Siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,618.50)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.908 | $2,831.00      | $2,569.21       |
| 2024-11-16 |      0.861 | $1,005.00      | $864.87         |
| 2024-11-09 |      0.814 | $1,455.00      | $1,184.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
