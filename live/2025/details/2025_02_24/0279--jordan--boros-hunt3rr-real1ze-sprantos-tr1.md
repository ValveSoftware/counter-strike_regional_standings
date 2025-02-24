### Roster Details<br />
Team Name: Jordan<br />
Roster: BOROS, hunt3rr, REAL1ZE, sprantos, tr1<br />
Global Rank: [279](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_02_24.md)<br />
Regional Rank: [37]( ../../standings_asia_2025_02_24.md)<br />
<br />
Final Rank Value:  426.5<br />
<br />
Final Rank Value (426.5) = Starting Rank Value (428.7) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.059[<sup>2</sup>](#table1)

The average of these factors is 0.015<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 428.7
- 400 + ( ( 0.015 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 428.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1397 | 2024-11-15 | GTZ             | L   | 0.525      | -            | -                | -                | -         |    -0.51 | BOROS, hunt3rr, REAL1ZE, sprantos, tr1 |
|            4 |     1409 | 2024-11-15 | Chile           | L   | 0.525      | -            | -                | -                | -         |    -7.74 | BOROS, hunt3rr, REAL1ZE, sprantos, tr1 |
|            3 |     1455 | 2024-11-14 | ALTERNATE aTTaX | L   | 0.518      | -            | -                | -                | -         |    -1.50 | BOROS, hunt3rr, REAL1ZE, sprantos, tr1 |
|            2 |     1459 | 2024-11-14 | Hungary         | L   | 0.518      | -            | -                | -                | -         |    -2.40 | BOROS, hunt3rr, REAL1ZE, sprantos, tr1 |
|            1 |     1465 | 2024-11-14 | Kosovo          | W   | 0.517      | 0.617        | 0.000 (0.000)    | 0.030 (0.009)    | 1 (0.517) |     9.95 | BOROS, hunt3rr, REAL1ZE, sprantos, tr1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
