### Roster Details<br />
Team Name: BRUTE<br />
Roster: hfah, KAD1M, realzen<br />
Global Rank: [358](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [223]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  477.1<br />
<br />
Final Rank Value (477.1) = Starting Rank Value (469.1) + Head To Head Adjustments (8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.146[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 469.1
- 400 + ( ( 0.037 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 469.1


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
|            5 |     5488 | 2026-02-10 | home      | W   | 0.228      | 0.384        | 0.000 (0.000)    | 0.046 (0.004)    | 0 (0.000) |     4.07 | hfah, KAD1M, mASKED, N1KOLAJ, realzen   |
|            4 |     5911 | 2026-01-27 | ALLINNERS | W   | 0.131      | 0.435        | 0.000 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     2.86 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|            3 |     5937 | 2026-01-25 | ex-RUBY   | L   | 0.120      | -            | -                | -                | -         |    -0.28 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|            2 |     5965 | 2026-01-24 | AM        | L   | 0.114      | -            | -                | -                | -         |    -0.77 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|            1 |     5979 | 2026-01-24 | AaB       | W   | 0.113      | 0.396        | 0.000 (0.000)    | 0.046 (0.002)    | 0 (0.000) |     2.09 | hfah, KAD1M, mASKED, realzen, w4rden    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
