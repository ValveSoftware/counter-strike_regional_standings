### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: KusMe, rexxie, shady, Something, spirit<br />
Global Rank: [161](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [97]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  629.9<br />
<br />
Final Rank Value (629.9) = Starting Rank Value (630.5) + Head To Head Adjustments (-0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 630.5
- 400 + ( ( 0.127 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 630.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1036 | 2025-03-17 | Roler Coaster | L   | 0.874      | -            | -                | -                | -         |   -16.11 | KusMe, rexxie, shady, Something, spirit   |
|            7 |     1048 | 2025-03-17 | Chimera       | W   | 0.873      | 0.143        | 0.004 (0.001)    | 0.247 (0.031)    | 0 (0.000) |    14.90 | KusMe, rexxie, shady, Something, spirit   |
|            6 |     2509 | 2024-12-20 | AMKAL         | L   | 0.293      | -            | -                | -                | -         |    -4.51 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            5 |     2523 | 2024-12-19 | K27           | W   | 0.287      | 0.333        | 0.002 (0.000)    | 0.114 (0.011)    | 0 (0.000) |     4.70 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            4 |     2571 | 2024-12-15 | RUSH B        | L   | 0.260      | -            | -                | -                | -         |    -2.70 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            3 |     2804 | 2024-12-04 | Monte         | L   | 0.187      | -            | -                | -                | -         |    -2.06 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            2 |     2824 | 2024-12-03 | Viperio       | W   | 0.180      | 0.333        | 0.001 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     2.34 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            1 |     2849 | 2024-12-02 | BC.Game       | W   | 0.172      | 0.333        | 0.006 (0.000)    | 0.059 (0.003)    | 0 (0.000) |     2.88 | dwushka, KusMe, shady, spirit, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,771.70)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.300 | $1,000.00      | $299.72         |
| 2024-12-15 |      0.260 | $3,500.00      | $910.86         |
| 2024-12-04 |      0.187 | $3,000.00      | $561.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
