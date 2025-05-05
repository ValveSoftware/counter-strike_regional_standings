### Roster Details<br />
Team Name: Kappa Bar<br />
Roster: Bååten, eraa, robiin, SeBreeZe, Siz<br />
Global Rank: [198](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [119]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  592.2<br />
<br />
Final Rank Value (592.2) = Starting Rank Value (592.7) + Head To Head Adjustments (-0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.153[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.106<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 592.7
- 400 + ( ( 0.106 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 592.7


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
|            5 |     3044 | 2024-11-22 | Alliance        | L   | 0.106      | -            | -                | -                | -         |    -1.04 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            4 |     3065 | 2024-11-21 | Johnny Speeds   | L   | 0.101      | -            | -                | -                | -         |    -1.38 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            3 |     3075 | 2024-11-21 | Kario Mart      | W   | 0.099      | 0.377        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.099) |     1.20 | Bååten, eraa, robiin, SeBreeZe, Siz  |
|            2 |     3158 | 2024-11-16 | Northern Lights | W   | 0.067      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.067) |     0.76 | eraa, robiin, SeBreeZe, Siz, Twinkey |
|            1 |     3400 | 2024-11-07 | Metizport       | L   | 0.009      | -            | -                | -                | -         |    -0.03 | eraa, robiin, SeBreeZe, Siz, virree  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($421.01)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-23 |      0.114 | $2,831.00      | $323.31         |
| 2024-11-16 |      0.067 | $1,005.00      | $67.57          |
| 2024-11-09 |      0.021 | $1,455.00      | $30.13          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
