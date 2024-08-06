### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: ayy, jason, nooz, PNDLM, sacrifice<br />
Global Rank: [145](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [39]( ../standings_americas.md)<br />
<br />
Final Rank Value:  742.8<br />
<br />
Final Rank Value (742.8) = Starting Rank Value (761.3) + Head To Head Adjustments (-18.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.113[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 761.3
- 400 + ( ( 0.176 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 761.3


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
|           20 |     2170 | 2024-05-14 | Wildcard    | L   | 0.642      | -            | -                | -                | -         |    -5.57 | ayy, jason, nooz, PNDLM, sacrifice     |
|           19 |     2174 | 2024-05-14 | Wildcard    | L   | 0.642      | -            | -                | -                | -         |    -5.83 | ayy, jason, nooz, PNDLM, sacrifice     |
|           18 |     2312 | 2024-05-09 | Limitless   | W   | 0.609      | 0.477        | 0.001 (0.000)    | 0.159 (0.046)    | 0 (0.000) |     6.86 | ayy, jason, nooz, PNDLM, sacrifice     |
|           17 |     2314 | 2024-05-09 | Limitless   | L   | 0.609      | -            | -                | -                | -         |   -12.66 | ayy, jason, nooz, PNDLM, sacrifice     |
|           16 |     2693 | 2024-04-21 | For Fun     | W   | 0.490      | 0.319        | 0.003 (0.001)    | 0.019 (0.003)    | 1 (0.490) |     5.80 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           15 |     2695 | 2024-04-21 | Will to Win | W   | 0.488      | 0.319        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.488) |     3.30 | ayy, brett, Fr3nk1e, jason, PNDLM      |
|           14 |     2997 | 2024-04-10 | Take Flyte  | L   | 0.416      | -            | -                | -                | -         |    -7.68 | ayy, intra, jason, PNDLM, sacrifice    |
|           13 |     3002 | 2024-04-10 | Take Flyte  | W   | 0.416      | 0.477        | 0.002 (0.000)    | 0.231 (0.046)    | 0 (0.000) |     5.52 | ayy, jason, nooz, PNDLM, sacrifice     |
|           12 |     3189 | 2024-04-04 | BOSS        | L   | 0.376      | -            | -                | -                | -         |    -5.17 | ayy, intra, jason, nooz, sacrifice     |
|           11 |     3195 | 2024-04-04 | BOSS        | L   | 0.375      | -            | -                | -                | -         |    -5.33 | ayy, intra, jason, PNDLM, sacrifice    |
|           10 |     3583 | 2024-03-15 | NRG         | L   | 0.243      | -            | -                | -                | -         |    -2.79 | ayy, intra, jason, PNDLM, sacrifice    |
|            9 |     3585 | 2024-03-15 | NRG         | W   | 0.242      | 0.477        | 0.032 (0.004)    | 0.524 (0.061)    | 0 (0.000) |     4.93 | ayy, intra, jason, PNDLM, sacrifice    |
|            8 |     3788 | 2024-03-07 | LAG         | L   | 0.190      | -            | -                | -                | -         |    -2.32 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            7 |     3789 | 2024-03-07 | LAG         | W   | 0.189      | 0.477        | 0.012 (0.001)    | 0.364 (0.033)    | 0 (0.000) |     3.70 | ayy, jason, LEARSI, PNDLM, sacrifice   |
|            6 |     4252 | 2024-02-16 | Mythic      | L   | 0.056      | -            | -                | -                | -         |    -0.80 | intra, jason, LEARSI, PNDLM, sacrifice |
|            5 |     4257 | 2024-02-16 | LAG         | W   | 0.055      | 0.143        | 0.012 (0.000)    | 0.364 (0.003)    | 0 (0.000) |     1.08 | intra, jason, LEARSI, PNDLM, sacrifice |
|            4 |     4310 | 2024-02-14 | Mythic      | L   | 0.043      | -            | -                | -                | -         |    -0.61 | intra, jason, LEARSI, PNDLM, sacrifice |
|            3 |     4312 | 2024-02-14 | Mythic      | L   | 0.042      | -            | -                | -                | -         |    -0.61 | intra, jason, LEARSI, PNDLM, sacrifice |
|            2 |     4350 | 2024-02-13 | Carpe Diem  | L   | 0.036      | -            | -                | -                | -         |    -0.70 | intra, jason, LEARSI, PNDLM, sacrifice |
|            1 |     4354 | 2024-02-13 | Carpe Diem  | W   | 0.036      | 0.477        | 0.005 (0.000)    | 0.035 (0.001)    | 0 (0.000) |     0.43 | intra, jason, LEARSI, PNDLM, sacrifice |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,113.96)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.816 | $1,200.00      | $979.00         |
| 2024-04-21 |      0.490 | $4,357.00      | $2,134.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
