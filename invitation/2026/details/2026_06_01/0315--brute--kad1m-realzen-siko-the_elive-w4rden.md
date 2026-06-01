### Roster Details<br />
Team Name: BRUTE<br />
Roster: KAD1M, realzen, Siko, The eLiVe, w4rden<br />
Global Rank: [315](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [197]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  530.2<br />
<br />
Final Rank Value (530.2) = Starting Rank Value (508.1) + Head To Head Adjustments (22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.1
- 400 + ( ( 0.057 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 508.1


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
|            7 |     5470 | 2026-01-20 | MASONIC            | W   | 0.321      | 0.384        | 0.006 (0.001)    | 0.595 (0.073)    | 0 (0.000) |     9.82 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            6 |     5520 | 2026-01-18 | TNC                | W   | 0.306      | 0.384        | 0.002 (0.000)    | 0.174 (0.020)    | 0 (0.000) |     7.29 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            5 |     5556 | 2026-01-17 | ex-Fingers Crossed | L   | 0.300      | -            | -                | -                | -         |    -3.95 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            4 |     5670 | 2026-01-15 | Clutchain fe       | W   | 0.286      | 0.384        | 0.012 (0.001)    | 0.193 (0.021)    | 0 (0.000) |     6.54 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            3 |     5734 | 2026-01-11 | CPH Wolves         | W   | 0.259      | 0.396        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     3.86 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            2 |     5735 | 2026-01-11 | The Last Resort    | L   | 0.259      | -            | -                | -                | -         |    -0.91 | KAD1M, realzen, Siko, The eLiVe, w4rden |
|            1 |     5758 | 2026-01-07 | HYPERSPIRIT        | L   | 0.232      | -            | -                | -                | -         |    -0.54 | KAD1M, realzen, Siko, The eLiVe, w4rden |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
