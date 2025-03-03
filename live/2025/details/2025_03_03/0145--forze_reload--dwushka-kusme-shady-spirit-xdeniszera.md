### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: dwushka, KusMe, shady, spirit, xdENiSZERA<br />
Global Rank: [145](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [96]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  695.4<br />
<br />
Final Rank Value (695.4) = Starting Rank Value (688.1) + Head To Head Adjustments (7.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 688.1
- 400 + ( ( 0.149 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 688.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      822 | 2024-12-20 | AMKAL    | L   | 0.713      | -            | -                | -                | -         |    -9.32 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            5 |      836 | 2024-12-19 | K27      | W   | 0.706      | 0.333        | 0.004 (0.001)    | 0.141 (0.033)    | 0 (0.000) |    10.93 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            4 |      884 | 2024-12-15 | RUSH B   | L   | 0.680      | -            | -                | -                | -         |    -6.85 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            3 |     1117 | 2024-12-04 | Monte    | L   | 0.607      | -            | -                | -                | -         |    -6.87 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            2 |     1137 | 2024-12-03 | Viperio  | W   | 0.599      | 0.333        | 0.002 (0.000)    | 0.079 (0.016)    | 0 (0.000) |     7.31 | dwushka, KusMe, shady, spirit, xdENiSZERA |
|            1 |     1162 | 2024-12-02 | BC.Game  | W   | 0.592      | 0.333        | 0.021 (0.004)    | 0.269 (0.053)    | 0 (0.000) |    12.12 | dwushka, KusMe, shady, spirit, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,920.41)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.720 | $1,000.00      | $719.55         |
| 2024-12-15 |      0.680 | $3,500.00      | $2,380.26       |
| 2024-12-04 |      0.607 | $3,000.00      | $1,820.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
