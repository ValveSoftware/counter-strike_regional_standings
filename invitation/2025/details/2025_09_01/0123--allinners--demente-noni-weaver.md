### Roster Details<br />
Team Name: ALLINNERS<br />
Roster: demente, noni, wEAVER<br />
Global Rank: [123](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [77]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  746.7<br />
<br />
Final Rank Value (746.7) = Starting Rank Value (768.8) + Head To Head Adjustments (-22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.229[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.8
- 400 + ( ( 0.192 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 768.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |        8 | 2025-08-31 | NOVAQ    | L   | 1.000      | -            | -                | -                | -         |   -12.79 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            6 |       12 | 2025-08-31 | DEPO     | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.070 (0.023)    | 1 (1.000) |    14.02 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            5 |       14 | 2025-08-31 | AK BARS  | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     7.08 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            4 |       35 | 2025-08-30 | NOVAQ    | L   | 1.000      | -            | -                | -                | -         |   -13.54 | Botpa1, demente, noni, raiNyyy, wEAVER |
|            3 |     1730 | 2025-05-24 | 100PG    | L   | 0.531      | -            | -                | -                | -         |   -10.41 | areokk, demente, kumao, noni, wEAVER   |
|            2 |     2858 | 2025-04-06 | KHAN     | L   | 0.211      | -            | -                | -                | -         |    -2.80 | ARSPOWER, demente, kumao, noni, wEAVER |
|            1 |     2875 | 2025-04-05 | DEPO     | L   | 0.205      | -            | -                | -                | -         |    -3.65 | ARSPOWER, demente, kumao, noni, wEAVER |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,243.58)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-31 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-05-24 |      0.531 | $1,000.00      | $531.04         |
| 2025-04-06 |      0.213 | $1,000.00      | $212.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
