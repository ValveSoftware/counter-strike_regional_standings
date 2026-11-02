### Roster Details<br />
Team Name: BERG<br />
Roster: Askan, CrePoW, KiMaRR, Rezst, Tree60<br />
Global Rank: [220](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [155]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  678.0<br />
<br />
Final Rank Value (678.0) = Starting Rank Value (661.4) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.223[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.143[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 661.4
- 400 + ( ( 0.140 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 661.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4456 | 2026-06-29 | SINQU    | W   | 0.360      | 0.303        | 0.002 (0.000)    | 0.142 (0.016)    | 1 (0.360) |     7.61 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            5 |     4461 | 2026-06-29 | Leo      | L   | 0.359      | -            | -                | -                | -         |    -1.86 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            4 |     4467 | 2026-06-29 | Aimhaus  | W   | 0.358      | 0.303        | 0.000 (0.000)    | 0.011 (0.001)    | 1 (0.358) |     2.18 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            3 |     4478 | 2026-06-28 | 6666     | W   | 0.354      | 0.303        | 0.000 (0.000)    | 0.008 (0.001)    | 1 (0.354) |     2.16 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            2 |     4481 | 2026-06-28 | ASTRAL   | L   | 0.354      | -            | -                | -                | -         |    -1.22 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |
|            1 |     4486 | 2026-06-28 | SINQU    | W   | 0.353      | 0.303        | 0.002 (0.000)    | 0.142 (0.015)    | 1 (0.353) |     7.72 | Askan, CrePoW, KiMaRR, Rezst, Tree60 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($180.07)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-29 |      0.360 | $500.00        | $180.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
