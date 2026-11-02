### Roster Details<br />
Team Name: Nas<br />
Roster: Biuckmt, Corazz, Mirorr, Mort1s, p5p<br />
Global Rank: [238](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [26]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  655.3<br />
<br />
Final Rank Value (655.3) = Starting Rank Value (632.7) + Head To Head Adjustments (22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 632.7
- 400 + ( ( 0.124 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 632.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      873 | 2026-10-09 | THE UNIT  | L   | 1.000      | -            | -                | -                | -         |   -16.27 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|           13 |      923 | 2026-10-08 | Legion    | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.085 (0.028)    | 0 (0.000) |    13.82 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|           12 |      997 | 2026-10-07 | Kaleido   | L   | 1.000      | -            | -                | -                | -         |   -10.64 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|           11 |     1712 | 2026-09-23 | Rare Atom | L   | 0.933      | -            | -                | -                | -         |    -4.30 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|           10 |     1782 | 2026-09-22 | Kaleido   | L   | 0.926      | -            | -                | -                | -         |   -11.13 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|            9 |     1838 | 2026-09-20 | LFO 9     | W   | 0.913      | 0.270        | 0.001 (0.000)    | 0.141 (0.035)    | 0 (0.000) |    10.03 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|            8 |     2059 | 2026-09-15 | Secret    | W   | 0.877      | 0.270        | 0.000 (0.000)    | 0.054 (0.013)    | 0 (0.000) |     8.02 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|            7 |     2140 | 2026-09-12 | WXM       | W   | 0.864      | 0.270        | 0.002 (0.000)    | 0.027 (0.006)    | 0 (0.000) |     8.86 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|            6 |     2242 | 2026-09-10 | Legion    | W   | 0.850      | 0.270        | 0.001 (0.000)    | 0.085 (0.020)    | 0 (0.000) |    12.01 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|            5 |     2889 | 2026-08-28 | Alter Ego | L   | 0.759      | -            | -                | -                | -         |    -2.27 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|            4 |     2930 | 2026-08-27 | XDM       | W   | 0.753      | 0.333        | 0.001 (0.000)    | 0.080 (0.020)    | 0 (0.000) |    12.34 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|            3 |     2977 | 2026-08-26 | BRONUUD   | W   | 0.746      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.93 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|            2 |     3022 | 2026-08-25 | The Huns  | L   | 0.740      | -            | -                | -                | -         |    -1.39 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |
|            1 |     3067 | 2026-08-24 | The Huns  | L   | 0.732      | -            | -                | -                | -         |    -1.40 | Biuckmt, Corazz, Mirorr, Mort1s, p5p |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,369.38)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-20 |      0.913 | $1,500.00      | $1,369.38       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
