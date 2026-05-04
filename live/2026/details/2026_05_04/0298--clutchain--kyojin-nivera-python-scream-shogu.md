### Roster Details<br />
Team Name: Clutchain<br />
Roster: Kyojin, Nivera, Python, ScreaM, SHOGU<br />
Global Rank: [298](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [184]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  559.3<br />
<br />
Final Rank Value (559.3) = Starting Rank Value (526.4) + Head To Head Adjustments (32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.029[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.4
- 400 + ( ( 0.068 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 526.4


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
|            7 |      195 | 2026-04-27 | Walczaki        | L   | 1.000      | -            | -                | -                | -         |    -1.14 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            6 |      362 | 2026-04-24 | TNC             | W   | 1.000      | 0.143        | 0.027 (0.004)    | 1.000 (0.143)    | 0 (0.000) |    27.62 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            5 |      485 | 2026-04-19 | UNiTY           | L   | 1.000      | -            | -                | -                | -         |    -3.64 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            4 |      560 | 2026-04-15 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |    -0.21 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            3 |      594 | 2026-04-13 | MOUZ NXT        | W   | 1.000      | 0.143        | 0.028 (0.004)    | 1.000 (0.143)    | 0 (0.000) |    30.33 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            2 |     2448 | 2026-03-09 | LFO 6           | L   | 0.828      | -            | -                | -                | -         |   -16.95 | Gauthierlelelele, Kyojin, Nivera, red1many, SHOGU |
|            1 |     2676 | 2026-03-05 | The Last Resort | L   | 0.801      | -            | -                | -                | -         |    -3.15 | Gauthierlelelele, Kyojin, Nivera, red1many, SHOGU |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
