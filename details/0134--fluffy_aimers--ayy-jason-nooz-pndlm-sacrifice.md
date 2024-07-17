### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: ayy, jason, nooz, PNDLM, sacrifice<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [134](../standings_global.md)<br />
Regional Rank: [36]( ../standings_americas.md)<br />
Final Rank Value:  792.2<br />
<br />
Final Rank Value (792.2) = Starting Rank Value (822.6) + Head To Head Adjustments (-30.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.254[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.145[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 822.6
- 400 + ( ( 0.197 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 822.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1432 | 2024-05-14 | Wildcard    | L   | 0.776      | -            | -                | -                | -         |    -6.56 | ayy, jason, nooz, PNDLM, sacrifice     |
|           19 |     1436 | 2024-05-14 | Wildcard    | L   | 0.776      | -            | -                | -                | -         |    -6.93 | ayy, jason, nooz, PNDLM, sacrifice     |
|           18 |     1574 | 2024-05-09 | Limitless   | W   | 0.743      | 0.477        | 0.002 (0.001)    | 0.214 (0.076)    | 0 (0.000) |     7.78 | ayy, jason, nooz, PNDLM, sacrifice     |
|           17 |     1576 | 2024-05-09 | Limitless   | L   | 0.743      | -            | -                | -                | -         |   -16.03 | ayy, jason, nooz, PNDLM, sacrifice     |
|           16 |     1955 | 2024-04-21 | For Fun     | W   | 0.624      | 0.319        | 0.006 (0.001)    | 0.026 (0.005)    | 1 (0.624) |     6.92 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           15 |     1957 | 2024-04-21 | Will to Win | W   | 0.622      | 0.319        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.622) |     3.50 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           14 |     2259 | 2024-04-10 | Take Flyte  | L   | 0.550      | -            | -                | -                | -         |   -10.57 | ayy, intra, jason, PNDLM, sacrifice    |
|           13 |     2264 | 2024-04-10 | Take Flyte  | W   | 0.549      | 0.477        | 0.003 (0.001)    | 0.245 (0.064)    | 0 (0.000) |     6.83 | ayy, jason, nooz, PNDLM, sacrifice     |
|           12 |     2451 | 2024-04-04 | BOSS        | L   | 0.509      | -            | -                | -                | -         |    -7.43 | ayy, intra, jason, nooz, sacrifice     |
|           11 |     2457 | 2024-04-04 | BOSS        | L   | 0.509      | -            | -                | -                | -         |    -7.77 | ayy, intra, jason, PNDLM, sacrifice    |
|           10 |     2845 | 2024-03-15 | NRG         | L   | 0.376      | -            | -                | -                | -         |    -4.88 | ayy, intra, jason, PNDLM, sacrifice    |
|            9 |     2847 | 2024-03-15 | NRG         | W   | 0.376      | 0.477        | 0.026 (0.005)    | 0.515 (0.092)    | 0 (0.000) |     7.12 | ayy, intra, jason, PNDLM, sacrifice    |
|            8 |     3050 | 2024-03-07 | LAG         | L   | 0.323      | -            | -                | -                | -         |    -3.70 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            7 |     3051 | 2024-03-07 | LAG         | W   | 0.323      | 0.477        | 0.020 (0.003)    | 0.417 (0.064)    | 0 (0.000) |     6.61 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            6 |     3514 | 2024-02-16 | Mythic      | L   | 0.189      | -            | -                | -                | -         |    -2.63 | intra, jason, LEARSI, PNDLM, sacrifice |
|            5 |     3519 | 2024-02-16 | LAG         | W   | 0.189      | 0.143        | 0.020 (0.001)    | 0.417 (0.011)    | 0 (0.000) |     3.97 | intra, jason, LEARSI, PNDLM, sacrifice |
|            4 |     3572 | 2024-02-14 | Mythic      | L   | 0.176      | -            | -                | -                | -         |    -2.48 | intra, jason, LEARSI, PNDLM, sacrifice |
|            3 |     3574 | 2024-02-14 | Mythic      | L   | 0.176      | -            | -                | -                | -         |    -2.52 | intra, jason, LEARSI, PNDLM, sacrifice |
|            2 |     3612 | 2024-02-13 | Carpe Diem  | L   | 0.170      | -            | -                | -                | -         |    -3.50 | intra, jason, LEARSI, PNDLM, sacrifice |
|            1 |     3616 | 2024-02-13 | Carpe Diem  | W   | 0.169      | 0.477        | 0.008 (0.001)    | 0.065 (0.005)    | 0 (0.000) |     1.86 | intra, jason, LEARSI, PNDLM, sacrifice |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,856.81)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.950 | $1,200.00      | $1,139.42       |
| 2024-04-21 |      0.624 | $4,357.00      | $2,717.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
