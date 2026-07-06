### Roster Details<br />
Team Name: BRUTE<br />
Roster: KAD1M, realzen, Siko, The eLiVe, w4rden<br />
Global Rank: [343](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [219]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  502.9<br />
<br />
Final Rank Value (502.9) = Starting Rank Value (497.5) + Head To Head Adjustments (5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.5
- 400 + ( ( 0.052 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 497.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     6131 | 2026-01-20 | MASONIC            | W   | 0.088      | 0.384        | 0.011 (0.000)    | 0.498 (0.017)    | 0 (0.000) |     2.69 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            5 |     6181 | 2026-01-18 | los kogutos        | W   | 0.073      | 0.384        | 0.019 (0.001)    | 0.945 (0.026)    | 0 (0.000) |     2.10 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            4 |     6217 | 2026-01-17 | ex-Fingers Crossed | L   | 0.067      | -            | -                | -                | -         |    -0.96 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            3 |     6331 | 2026-01-15 | Clutchain fe       | W   | 0.053      | 0.384        | 0.012 (0.000)    | 0.156 (0.003)    | 0 (0.000) |     1.29 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            2 |     6395 | 2026-01-11 | ex-CPH Wolves      | W   | 0.026      | 0.396        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.30 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            1 |     6396 | 2026-01-11 | The Last Resort    | L   | 0.026      | -            | -                | -                | -         |    -0.09 | KAD1M, realzen, Siko, The eLiVe, w4rden |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
