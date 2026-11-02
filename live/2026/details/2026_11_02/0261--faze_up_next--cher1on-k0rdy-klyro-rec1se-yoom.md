### Roster Details<br />
Team Name: FaZe Up Next<br />
Roster: Cher1on, k0rdy, klyrO, rec1se, yoom<br />
Global Rank: [261](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [177]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  616.4<br />
<br />
Final Rank Value (616.4) = Starting Rank Value (596.1) + Head To Head Adjustments (20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.184[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 596.1
- 400 + ( ( 0.105 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 596.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1569 | 2026-09-25 | MOUZ NXT | L   | 0.946      | -            | -                | -                | -         |    -6.34 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            5 |     1580 | 2026-09-25 | GenOne   | L   | 0.945      | -            | -                | -                | -         |    -1.28 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            4 |     1588 | 2026-09-25 | MOUZ NXT | W   | 0.944      | 0.406        | 0.007 (0.003)    | 0.434 (0.166)    | 1 (0.944) |    23.87 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            3 |     1951 | 2026-09-17 | NT       | L   | 0.895      | -            | -                | -                | -         |    -1.43 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            2 |     1988 | 2026-09-17 | 7o7      | W   | 0.892      | 0.362        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.892) |     6.88 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            1 |     1995 | 2026-09-17 | NT       | L   | 0.891      | -            | -                | -                | -         |    -1.31 | Cher1on, k0rdy, klyrO, rec1se, yoom |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
