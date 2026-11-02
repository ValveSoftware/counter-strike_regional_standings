### Roster Details<br />
Team Name: Xcity<br />
Roster: ATLAS, gag, mda, qu1ck, tuzon<br />
Global Rank: [285](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [190]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  588.4<br />
<br />
Final Rank Value (588.4) = Starting Rank Value (563.1) + Head To Head Adjustments (25.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 563.1
- 400 + ( ( 0.087 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 563.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      573 | 2026-10-16 | QUAZAR        | L   | 1.000      | -            | -                | -                | -         |    -1.58 | ATLAS, gag, mda, qu1ck, tuzon |
|            8 |      578 | 2026-10-16 | Y27           | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.028 (0.008)    | 1 (1.000) |    15.34 | ATLAS, gag, mda, qu1ck, tuzon |
|            7 |      597 | 2026-10-16 | Black Phoenix | L   | 1.000      | -            | -                | -                | -         |    -0.87 | ATLAS, gag, mda, qu1ck, tuzon |
|            6 |     2839 | 2026-08-29 | UPGRADE       | L   | 0.766      | -            | -                | -                | -         |    -0.85 | ATLAS, gag, mda, qu1ck, tuzon |
|            5 |     2922 | 2026-08-27 | Color         | L   | 0.753      | -            | -                | -                | -         |    -1.94 | ATLAS, gag, mda, qu1ck, tuzon |
|            4 |     3057 | 2026-08-24 | Nemesis       | L   | 0.733      | -            | -                | -                | -         |    -0.18 | ATLAS, gag, mda, qu1ck, tuzon |
|            3 |     3097 | 2026-08-23 | Walczaki      | W   | 0.724      | 0.490        | 0.019 (0.007)    | 0.211 (0.075)    | 0 (0.000) |    19.52 | ATLAS, gag, mda, qu1ck, tuzon |
|            2 |     5442 | 2026-05-22 | WeClear       | L   | 0.106      | -            | -                | -                | -         |    -2.35 | ATLAS, gag, mda, qu1ck, tuzon |
|            1 |     5454 | 2026-05-22 | BAKS          | L   | 0.104      | -            | -                | -                | -         |    -1.82 | ATLAS, gag, mda, qu1ck, tuzon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
