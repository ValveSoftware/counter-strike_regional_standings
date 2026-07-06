### Roster Details<br />
Team Name: Aimhaus<br />
Roster: erners, flairr, Mairel, silrak, Yamero<br />
Global Rank: [339](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [215]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  507.3<br />
<br />
Final Rank Value (507.3) = Starting Rank Value (526.4) + Head To Head Adjustments (-19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.163[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 526.4
- 400 + ( ( 0.067 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 526.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       58 | 2026-06-29 | BERG          | L   | 1.000      | -            | -                | -                | -         |    -6.61 | blazekiNho, flairr, nisker, silrak, Yamero |
|            8 |       75 | 2026-06-28 | Coalesce      | L   | 1.000      | -            | -                | -                | -         |   -10.98 | blazekiNho, flairr, nisker, silrak, Yamero |
|            7 |       79 | 2026-06-28 | GAMEHARMONY   | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.030 (0.009)    | 1 (1.000) |    16.14 | blazekiNho, flairr, nisker, silrak, Yamero |
|            6 |       80 | 2026-06-28 | Leo           | L   | 1.000      | -            | -                | -                | -         |    -2.23 | blazekiNho, flairr, nisker, silrak, Yamero |
|            5 |     2946 | 2026-03-31 | BESTIA        | L   | 0.552      | -            | -                | -                | -         |    -0.45 | erners, flairr, Mairel, silrak, Yamero     |
|            4 |     2947 | 2026-03-31 | Sashi Academy | L   | 0.552      | -            | -                | -                | -         |   -10.82 | erners, flairr, Mairel, silrak, Yamero     |
|            3 |     2948 | 2026-03-31 | Falcons Force | L   | 0.552      | -            | -                | -                | -         |    -3.47 | erners, flairr, Mairel, silrak, Yamero     |
|            2 |     2949 | 2026-03-31 | 3DMAX         | L   | 0.552      | -            | -                | -                | -         |    -0.22 | erners, flairr, Mairel, silrak, Yamero     |
|            1 |     2950 | 2026-03-31 | EAC           | L   | 0.552      | -            | -                | -                | -         |    -0.49 | erners, flairr, Mairel, silrak, Yamero     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
