### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: ayy, jason, nooz, PNDLM, sacrifice<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [137](../standings_global.md)<br />
Regional Rank: [37]( ../standings_americas.md)<br />
Final Rank Value:  757.9<br />
<br />
Final Rank Value (757.9) = Starting Rank Value (783.1) + Head To Head Adjustments (-25.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.347[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.136[<sup>2</sup>](#table1)

The average of these factors is 0.189<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.1
- 400 + ( ( 0.189 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 783.1


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
|           20 |     1720 | 2024-05-14 | Wildcard    | L   | 0.729      | -            | -                | -                | -         |    -6.21 | ayy, jason, nooz, PNDLM, sacrifice     |
|           19 |     1724 | 2024-05-14 | Wildcard    | L   | 0.729      | -            | -                | -                | -         |    -6.54 | ayy, jason, nooz, PNDLM, sacrifice     |
|           18 |     1862 | 2024-05-09 | Limitless   | W   | 0.696      | 0.477        | 0.001 (0.000)    | 0.196 (0.065)    | 0 (0.000) |     7.55 | ayy, jason, nooz, PNDLM, sacrifice     |
|           17 |     1864 | 2024-05-09 | Limitless   | L   | 0.696      | -            | -                | -                | -         |   -14.75 | ayy, jason, nooz, PNDLM, sacrifice     |
|           16 |     2243 | 2024-04-21 | For Fun     | W   | 0.576      | 0.319        | 0.005 (0.001)    | 0.023 (0.004)    | 1 (0.576) |     6.66 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           15 |     2245 | 2024-04-21 | Will to Win | W   | 0.575      | 0.319        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.575) |     3.63 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           14 |     2547 | 2024-04-10 | Take Flyte  | L   | 0.502      | -            | -                | -                | -         |    -9.52 | ayy, intra, jason, PNDLM, sacrifice    |
|           13 |     2552 | 2024-04-10 | Take Flyte  | W   | 0.502      | 0.477        | 0.003 (0.001)    | 0.228 (0.055)    | 0 (0.000) |     6.40 | ayy, jason, nooz, PNDLM, sacrifice     |
|           12 |     2739 | 2024-04-04 | BOSS        | L   | 0.462      | -            | -                | -                | -         |    -6.35 | ayy, intra, jason, nooz, sacrifice     |
|           11 |     2745 | 2024-04-04 | BOSS        | L   | 0.462      | -            | -                | -                | -         |    -6.61 | ayy, intra, jason, PNDLM, sacrifice    |
|           10 |     3133 | 2024-03-15 | NRG         | L   | 0.329      | -            | -                | -                | -         |    -4.17 | ayy, intra, jason, PNDLM, sacrifice    |
|            9 |     3135 | 2024-03-15 | NRG         | W   | 0.329      | 0.477        | 0.025 (0.004)    | 0.574 (0.090)    | 0 (0.000) |     6.32 | ayy, intra, jason, PNDLM, sacrifice    |
|            8 |     3338 | 2024-03-07 | LAG         | L   | 0.276      | -            | -                | -                | -         |    -3.27 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            7 |     3339 | 2024-03-07 | LAG         | W   | 0.276      | 0.477        | 0.017 (0.002)    | 0.385 (0.051)    | 0 (0.000) |     5.52 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            6 |     3802 | 2024-02-16 | Mythic      | L   | 0.142      | -            | -                | -                | -         |    -2.01 | intra, jason, LEARSI, PNDLM, sacrifice |
|            5 |     3807 | 2024-02-16 | LAG         | W   | 0.141      | 0.143        | 0.017 (0.000)    | 0.385 (0.008)    | 0 (0.000) |     2.89 | intra, jason, LEARSI, PNDLM, sacrifice |
|            4 |     3860 | 2024-02-14 | Mythic      | L   | 0.129      | -            | -                | -                | -         |    -1.84 | intra, jason, LEARSI, PNDLM, sacrifice |
|            3 |     3862 | 2024-02-14 | Mythic      | L   | 0.129      | -            | -                | -                | -         |    -1.86 | intra, jason, LEARSI, PNDLM, sacrifice |
|            2 |     3900 | 2024-02-13 | Carpe Diem  | L   | 0.123      | -            | -                | -                | -         |    -2.46 | intra, jason, LEARSI, PNDLM, sacrifice |
|            1 |     3904 | 2024-02-13 | Carpe Diem  | W   | 0.122      | 0.477        | 0.007 (0.000)    | 0.054 (0.003)    | 0 (0.000) |     1.41 | intra, jason, LEARSI, PNDLM, sacrifice |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,594.38)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.902 | $1,200.00      | $1,082.75       |
| 2024-04-21 |      0.576 | $4,357.00      | $2,511.63       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
