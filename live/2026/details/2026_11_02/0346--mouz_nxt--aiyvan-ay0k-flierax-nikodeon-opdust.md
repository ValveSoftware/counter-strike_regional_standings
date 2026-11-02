### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: AiyvaN, ay0k, Flierax, Nikodeon, opdust<br />
Global Rank: [346](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [228]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  481.7<br />
<br />
Final Rank Value (481.7) = Starting Rank Value (481.2) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.2
- 400 + ( ( 0.043 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 481.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     5685 | 2026-05-14 | 1win     | L   | 0.052      | -            | -                | -                | -         |    -0.00 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|            6 |     5738 | 2026-05-12 | Lavked   | L   | 0.041      | -            | -                | -                | -         |    -0.30 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|            5 |     5795 | 2026-05-11 | ex-INOX  | L   | 0.032      | -            | -                | -                | -         |    -0.07 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|            4 |     5837 | 2026-05-10 | BBL      | L   | 0.025      | -            | -                | -                | -         |    -0.01 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|            3 |     5848 | 2026-05-09 | UNiTY    | W   | 0.021      | 0.384        | 0.019 (0.000)    | 0.683 (0.005)    | 0 (0.000) |     0.64 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|            2 |     5886 | 2026-05-08 | AM       | W   | 0.012      | 0.435        | 0.002 (0.000)    | 0.049 (0.000)    | 0 (0.000) |     0.29 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|            1 |     5898 | 2026-05-07 | Lavked   | L   | 0.007      | -            | -                | -                | -         |    -0.05 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
