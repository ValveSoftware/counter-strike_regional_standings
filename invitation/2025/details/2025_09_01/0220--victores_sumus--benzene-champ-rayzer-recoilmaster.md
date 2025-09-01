### Roster Details<br />
Team Name: Victores Sumus<br />
Roster: Benzene, ChAmP, RaYzEr, Recoilmaster<br />
Global Rank: [220](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_09_01.md)<br />
Regional Rank: [35]( ../../standings_asia_2025_09_01.md)<br />
<br />
Final Rank Value:  562.9<br />
<br />
Final Rank Value (562.9) = Starting Rank Value (567.6) + Head To Head Adjustments (-4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.199[<sup>1</sup>](#table2)
- Bounty Collected: 0.150[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 567.6
- 400 + ( ( 0.087 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 567.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3218 | 2025-03-28 | IHC            | L   | 0.151      | -            | -                | -                | -         |    -1.83 | arakyN, Benzene, ChAmP, RaYzEr, Recoilmaster |
|            4 |     3284 | 2025-03-27 | Gods Reign     | L   | 0.145      | -            | -                | -                | -         |    -1.86 | arakyN, Benzene, ChAmP, RaYzEr, Recoilmaster |
|            3 |     3340 | 2025-03-26 | Victores Sumus | L   | 0.139      | -            | -                | -                | -         |    -1.99 | Benzene, ChAmP, p7, RaYzEr, Recoilmaster     |
|            2 |     3383 | 2025-03-25 | Gods Reign     | W   | 0.132      | 0.266        | 0.001 (0.000)    | 0.048 (0.002)    | 0 (0.000) |     2.51 | arakyN, Benzene, ChAmP, RaYzEr, Recoilmaster |
|            1 |     3422 | 2025-03-23 | Gods Reign     | L   | 0.117      | -            | -                | -                | -         |    -1.50 | arakyN, Benzene, ChAmP, RaYzEr, Recoilmaster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40.47)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-26 |      0.139 | $291.00        | $40.47          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
