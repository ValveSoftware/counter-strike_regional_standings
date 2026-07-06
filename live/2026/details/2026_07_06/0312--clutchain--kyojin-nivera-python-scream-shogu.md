### Roster Details<br />
Team Name: Clutchain<br />
Roster: Kyojin, Nivera, Python, ScreaM, SHOGU<br />
Global Rank: [312](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [200]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  559.0<br />
<br />
Final Rank Value (559.0) = Starting Rank Value (531.6) + Head To Head Adjustments (27.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.6
- 400 + ( ( 0.070 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 531.6


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
|            9 |      436 | 2026-06-08 | XI              | L   | 1.000      | -            | -                | -                | -         |   -11.68 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            8 |      513 | 2026-06-05 | VP.Prodigy      | W   | 0.995      | 0.143        | 0.000 (0.000)    | 0.119 (0.017)    | 0 (0.000) |    16.75 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            7 |     1818 | 2026-04-27 | Walczaki        | L   | 0.734      | -            | -                | -                | -         |    -0.84 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            6 |     2009 | 2026-04-24 | los kogutos     | W   | 0.714      | 0.363        | 0.019 (0.005)    | 0.945 (0.245)    | 0 (0.000) |    19.27 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            5 |     2132 | 2026-04-19 | UNiTY           | L   | 0.680      | -            | -                | -                | -         |    -3.85 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            4 |     2207 | 2026-04-15 | SINNERS         | L   | 0.653      | -            | -                | -                | -         |    -0.35 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            3 |     2241 | 2026-04-13 | MOUZ NXT        | W   | 0.641      | 0.363        | 0.009 (0.002)    | 0.511 (0.119)    | 0 (0.000) |    18.45 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            2 |     4095 | 2026-03-09 | LFO 6           | L   | 0.408      | -            | -                | -                | -         |    -8.60 | Gauthierlelelele, Kyojin, Nivera, red1many, SHOGU |
|            1 |     4323 | 2026-03-05 | The Last Resort | L   | 0.381      | -            | -                | -                | -         |    -1.79 | Gauthierlelelele, Kyojin, Nivera, red1many, SHOGU |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
