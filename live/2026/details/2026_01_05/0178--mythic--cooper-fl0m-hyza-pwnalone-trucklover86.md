### Roster Details<br />
Team Name: Mythic<br />
Roster: Cooper, fl0m, hyza, PwnAlone, Trucklover86<br />
Global Rank: [178](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [38]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  715.6<br />
<br />
Final Rank Value (715.6) = Starting Rank Value (686.9) + Head To Head Adjustments (28.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 686.9
- 400 + ( ( 0.145 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 686.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      963 | 2025-11-11 | Marsborne     | L   | 0.837      | -            | -                | -                | -         |    -2.00 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           18 |      988 | 2025-11-10 | Zomblers      | W   | 0.830      | 0.363        | 0.001 (0.000)    | 0.232 (0.070)    | 0 (0.000) |    12.40 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           17 |     1474 | 2025-10-27 | TSG           | W   | 0.736      | 0.363        | 0.000 (0.000)    | 0.165 (0.044)    | 0 (0.000) |     8.28 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           16 |     1514 | 2025-10-26 | LAG           | L   | 0.730      | -            | -                | -                | -         |    -9.86 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           15 |     1623 | 2025-10-24 | BOSS          | W   | 0.716      | 0.363        | 0.015 (0.004)    | 0.470 (0.122)    | 0 (0.000) |    14.34 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|           14 |     1694 | 2025-10-23 | Take Flyte    | W   | 0.709      | 0.363        | 0.000 (0.000)    | 0.267 (0.069)    | 0 (0.000) |     9.37 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|           13 |     2052 | 2025-10-09 | regain        | L   | 0.616      | -            | -                | -                | -         |    -8.21 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|           12 |     2100 | 2025-10-08 | Sakura        | W   | 0.609      | 0.363        | 0.059 (0.013)    | 0.277 (0.061)    | 0 (0.000) |    13.78 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|           11 |     2157 | 2025-10-07 | Wanted Goons  | W   | 0.602      | 0.363        | 0.000 (0.000)    | 0.141 (0.031)    | 0 (0.000) |     6.10 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|           10 |     2213 | 2025-10-06 | Wildcard      | L   | 0.596      | -            | -                | -                | -         |    -3.11 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            9 |     2277 | 2025-10-05 | anything else | W   | 0.589      | 0.363        | 0.000 (0.000)    | 0.045 (0.010)    | 0 (0.000) |     5.32 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            8 |     3164 | 2025-09-11 | Aether        | L   | 0.429      | -            | -                | -                | -         |    -7.19 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            7 |     3269 | 2025-09-09 | Voca          | L   | 0.416      | -            | -                | -                | -         |    -2.50 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            6 |     3322 | 2025-09-08 | anything else | W   | 0.410      | 0.363        | 0.000 (0.000)    | 0.045 (0.007)    | 0 (0.000) |     3.49 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            5 |     3402 | 2025-09-06 | Take Flyte    | L   | 0.394      | -            | -                | -                | -         |    -7.70 | Austin, BiBiAhn, Cooper, PwnAlone, Trucklover86 |
|            4 |     3924 | 2025-08-14 | Phoenix       | L   | 0.243      | -            | -                | -                | -         |    -3.43 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            3 |     3968 | 2025-08-13 | Getting Info  | W   | 0.236      | 0.363        | 0.003 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     3.52 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |
|            2 |     4071 | 2025-08-11 | Zomblers      | L   | 0.223      | -            | -                | -                | -         |    -3.56 | Austin, Cooper, fl0m, hyza, Trucklover86        |
|            1 |     4699 | 2025-07-11 | Outfit 49     | L   | 0.014      | -            | -                | -                | -         |    -0.32 | Cooper, fl0m, hyza, PwnAlone, Trucklover86      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($863.17)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.863 | $1,000.00      | $863.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
