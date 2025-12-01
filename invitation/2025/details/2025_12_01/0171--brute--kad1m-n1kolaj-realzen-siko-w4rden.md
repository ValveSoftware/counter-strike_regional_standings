### Roster Details<br />
Team Name: BRUTE<br />
Roster: KAD1M, N1KOLAJ, realzen, Siko, w4rden<br />
Global Rank: [171](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [108]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  708.7<br />
<br />
Final Rank Value (708.7) = Starting Rank Value (704.0) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.160<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 704.0
- 400 + ( ( 0.160 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 704.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       35 | 2025-11-29 | UNiTY       | L   | 1.000      | -            | -                | -                | -         |    -9.01 | KAD1M, N1KOLAJ, realzen, Siko, w4rden |
|            7 |       52 | 2025-11-28 | ECLOT       | L   | 1.000      | -            | -                | -                | -         |    -4.02 | KAD1M, N1KOLAJ, realzen, Siko, w4rden |
|            6 |     1448 | 2025-10-11 | ECLOT       | L   | 0.858      | -            | -                | -                | -         |    -2.40 | KAD1M, N1KOLAJ, realzen, Siko, w4rden |
|            5 |     1465 | 2025-10-10 | GLORE       | W   | 0.854      | 0.371        | 0.000 (0.000)    | 0.058 (0.018)    | 1 (0.854) |     4.12 | KAD1M, N1KOLAJ, realzen, Siko, w4rden |
|            4 |     1530 | 2025-10-09 | SINNERS     | L   | 0.845      | -            | -                | -                | -         |    -2.37 | KAD1M, N1KOLAJ, realzen, Siko, w4rden |
|            3 |     2013 | 2025-09-28 | UNiTY       | W   | 0.773      | 0.334        | 0.010 (0.003)    | 0.433 (0.112)    | 0 (0.000) |    16.69 | KAD1M, N1KOLAJ, realzen, Siko, w4rden |
|            2 |     2062 | 2025-09-27 | Dark Tigers | W   | 0.767      | 0.334        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.69 | KAD1M, N1KOLAJ, realzen, Siko, w4rden |
|            1 |     2161 | 2025-09-25 | ECLOT       | L   | 0.754      | -            | -                | -                | -         |    -1.99 | KAD1M, N1KOLAJ, realzen, Siko, w4rden |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,409.31)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-29 |      1.000 | $2,379.00      | $2,379.00       |
| 2025-10-11 |      0.860 | $2,362.00      | $2,030.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
