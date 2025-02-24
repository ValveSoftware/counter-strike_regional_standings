### Roster Details<br />
Team Name: Big W<br />
Roster: Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN<br />
Global Rank: [169](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_24.md)<br />
Regional Rank: [15]( ../../standings_asia_2025_02_24.md)<br />
<br />
Final Rank Value:  658.5<br />
<br />
Final Rank Value (658.5) = Starting Rank Value (663.4) + Head To Head Adjustments (-5.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.061[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 663.4
- 400 + ( ( 0.138 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 663.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      832 | 2024-12-14 | Gods Reign     | L   | 0.717      | -            | -                | -                | -         |   -11.61 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            5 |      834 | 2024-12-14 | st4rboys       | W   | 0.716      | 0.262        | 0.002 (0.000)    | 0.042 (0.008)    | 0 (0.000) |     9.90 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            4 |     1368 | 2024-11-17 | True Rippers   | L   | 0.537      | -            | -                | -                | -         |    -7.87 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            3 |     1394 | 2024-11-16 | Gods Reign     | W   | 0.530      | 0.289        | 0.005 (0.001)    | 0.248 (0.038)    | 1 (0.530) |     8.38 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            2 |     1858 | 2024-10-27 | Gods Reign     | L   | 0.396      | -            | -                | -                | -         |    -6.08 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |
|            1 |     1860 | 2024-10-26 | ROG Academy IN | W   | 0.396      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.31 | clouda, Crazy_Gamer, CycloneF, EmbeR, SpawN    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,200.72)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-14 |      0.717 | $500.00        | $358.34         |
| 2024-11-17 |      0.537 | $1,200.00      | $644.22         |
| 2024-10-27 |      0.396 | $500.00        | $198.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
