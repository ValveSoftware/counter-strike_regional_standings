### Roster Details<br />
Team Name: 5Actors<br />
Roster: airscape, Aunkere, Jerry, KENSI, tried<br />
Global Rank: [340](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [208]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  482.1<br />
<br />
Final Rank Value (482.1) = Starting Rank Value (471.2) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.149[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 471.2
- 400 + ( ( 0.037 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 471.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1985 | 2026-04-03 | BET-M      | L   | 0.806      | -            | -                | -                | -         |    -0.36 | airscape, Aunkere, Jerry, KENSI, tried |
|            7 |     2007 | 2026-04-03 | Athlon     | W   | 0.805      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.805) |     9.86 | airscape, Aunkere, Jerry, KENSI, tried |
|            6 |     2011 | 2026-04-03 | Nemiga     | L   | 0.804      | -            | -                | -                | -         |    -0.21 | airscape, Aunkere, Jerry, KENSI, tried |
|            5 |     3375 | 2026-03-10 | Nemiga     | L   | 0.649      | -            | -                | -                | -         |    -0.21 | airscape, Aunkere, Jerry, KENSI, tried |
|            4 |     3385 | 2026-03-10 | SPARTA     | W   | 0.648      | 0.371        | 0.000 (0.000)    | 0.037 (0.009)    | 1 (0.648) |    12.77 | airscape, Aunkere, Jerry, KENSI, tried |
|            3 |     3393 | 2026-03-10 | ARCRED     | L   | 0.647      | -            | -                | -                | -         |    -0.27 | airscape, Aunkere, Jerry, KENSI, tried |
|            2 |     3756 | 2026-03-03 | Younglings | L   | 0.601      | -            | -                | -                | -         |   -10.40 | airscape, Aunkere, Jerry, KENSI, tried |
|            1 |     3781 | 2026-03-03 | SPARTA     | L   | 0.599      | -            | -                | -                | -         |    -0.27 | airscape, Aunkere, Jerry, KENSI, tried |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
