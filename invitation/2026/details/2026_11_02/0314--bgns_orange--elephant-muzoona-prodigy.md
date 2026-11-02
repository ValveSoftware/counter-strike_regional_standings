### Roster Details<br />
Team Name: BGNS Orange<br />
Roster: ElephanT, Muzoona, Prodigy<br />
Global Rank: [314](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_11_02.md)<br />
Regional Rank: [39]( ../../standings_asia_2026_11_02.md)<br />
<br />
Final Rank Value:  543.5<br />
<br />
Final Rank Value (543.5) = Starting Rank Value (550.6) + Head To Head Adjustments (-7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.217[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.080<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 550.6
- 400 + ( ( 0.080 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 550.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      827 | 2026-10-10 | KZG         | L   | 1.000      | -            | -                | -                | -         |    -8.01 | ElephanT, Fitzy, Muzoona, Prodigy, Zoot |
|            6 |      842 | 2026-10-09 | Ground Zero | L   | 1.000      | -            | -                | -                | -         |    -2.83 | ElephanT, Fitzy, Muzoona, Prodigy, Zoot |
|            5 |      849 | 2026-10-09 | Off Chops   | W   | 1.000      | 0.318        | 0.008 (0.002)    | 0.148 (0.047)    | 1 (1.000) |    28.57 | ElephanT, Fitzy, Muzoona, Prodigy, Zoot |
|            4 |     2526 | 2026-09-04 | LFO 8       | L   | 0.810      | -            | -                | -                | -         |   -11.22 | ElephanT, Harbor, jcg, Muzoona, Prodigy |
|            3 |     2583 | 2026-09-04 | Abyssal     | L   | 0.804      | -            | -                | -                | -         |    -1.79 | ElephanT, Harbor, jcg, Muzoona, Prodigy |
|            2 |     3560 | 2026-08-06 | ex-Arcade   | L   | 0.612      | -            | -                | -                | -         |    -9.85 | ElephanT, Harbor, jcg, Muzoona, Prodigy |
|            1 |     3582 | 2026-08-05 | Ground Zero | L   | 0.605      | -            | -                | -                | -         |    -1.99 | ElephanT, Harbor, jcg, Muzoona, Prodigy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
