### Roster Details<br />
Team Name: BRUTE<br />
Roster: hfah, KAD1M, realzen, w4rden<br />
Global Rank: [318](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [200]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  527.5<br />
<br />
Final Rank Value (527.5) = Starting Rank Value (505.2) + Head To Head Adjustments (22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.2
- 400 + ( ( 0.055 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 505.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4827 | 2026-02-10 | home      | W   | 0.461      | 0.384        | 0.000 (0.000)    | 0.065 (0.012)    | 0 (0.000) |     7.61 | hfah, KAD1M, mASKED, N1KOLAJ, realzen   |
|            5 |     5250 | 2026-01-27 | ALLINNERS | W   | 0.364      | 0.435        | 0.001 (0.000)    | 0.053 (0.008)    | 0 (0.000) |     8.00 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|            4 |     5276 | 2026-01-25 | ex-RUBY   | L   | 0.353      | -            | -                | -                | -         |    -0.88 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|            3 |     5304 | 2026-01-24 | AM        | L   | 0.347      | -            | -                | -                | -         |    -3.08 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|            2 |     5318 | 2026-01-24 | EAC       | W   | 0.346      | 0.396        | 0.011 (0.002)    | 0.768 (0.105)    | 0 (0.000) |    10.69 | hfah, KAD1M, mASKED, realzen, w4rden    |
|            1 |     5904 | 2025-12-20 | BET-M     | L   | 0.112      | -            | -                | -                | -         |    -0.05 | KAD1M, N1KOLAJ, realzen, Siko, w4rden   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
