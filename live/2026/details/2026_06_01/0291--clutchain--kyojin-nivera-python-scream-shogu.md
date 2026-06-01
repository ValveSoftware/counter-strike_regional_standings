### Roster Details<br />
Team Name: Clutchain<br />
Roster: Kyojin, Nivera, Python, ScreaM, SHOGU<br />
Global Rank: [291](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [185]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  580.6<br />
<br />
Final Rank Value (580.6) = Starting Rank Value (550.7) + Head To Head Adjustments (29.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.079<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 550.7
- 400 + ( ( 0.079 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 550.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1157 | 2026-04-27 | Walczaki        | L   | 0.968      | -            | -                | -                | -         |    -1.14 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            6 |     1348 | 2026-04-24 | TNC             | W   | 0.947      | 0.363        | 0.022 (0.008)    | 1.000 (0.344)    | 0 (0.000) |    25.85 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            5 |     1471 | 2026-04-19 | UNiTY           | L   | 0.913      | -            | -                | -                | -         |    -4.04 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            4 |     1546 | 2026-04-15 | SINNERS         | L   | 0.886      | -            | -                | -                | -         |    -0.22 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            3 |     1580 | 2026-04-13 | MOUZ NXT        | W   | 0.874      | 0.363        | 0.015 (0.005)    | 0.814 (0.258)    | 0 (0.000) |    26.28 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            2 |     3434 | 2026-03-09 | LFO 6           | L   | 0.641      | -            | -                | -                | -         |   -13.86 | Gauthierlelelele, Kyojin, Nivera, red1many, SHOGU |
|            1 |     3662 | 2026-03-05 | The Last Resort | L   | 0.614      | -            | -                | -                | -         |    -3.00 | Gauthierlelelele, Kyojin, Nivera, red1many, SHOGU |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
