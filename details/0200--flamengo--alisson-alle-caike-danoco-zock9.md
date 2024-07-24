### Roster Details<br />
Team Name: Flamengo<br />
Roster: Alisson, ALLE, caike, danoco, zock9<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [200](../standings_global.md)<br />
Regional Rank: [58]( ../standings_americas.md)<br />
Final Rank Value:  497.7<br />
<br />
Final Rank Value (497.7) = Starting Rank Value (501.6) + Head To Head Adjustments (-3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.6
- 400 + ( ( 0.050 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 501.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     3173 | 2024-03-14 | MIBR Academy  | L   | 0.321      | -            | -                | -                | -         |    -4.82 | Alisson, ALLE, caike, danoco, zock9   |
|           11 |     3179 | 2024-03-14 | RED Canids    | L   | 0.320      | -            | -                | -                | -         |    -0.31 | Alisson, ALLE, caike, danoco, zock9   |
|           10 |     3252 | 2024-03-11 | MIBR Academy  | W   | 0.301      | 0.303        | 0.000 (0.000)    | 0.037 (0.003)    | 0 (0.000) |     4.99 | Alisson, ALLE, caike, danoco, zock9   |
|            9 |     3278 | 2024-03-10 | FURIA Academy | L   | 0.294      | -            | -                | -                | -         |    -4.35 | Alisson, ALLE, danoco, voltera, zock9 |
|            8 |     3328 | 2024-03-08 | adalYamigos   | L   | 0.280      | -            | -                | -                | -         |    -2.94 | Alisson, ALLE, danoco, voltera, zock9 |
|            7 |     3711 | 2024-02-20 | Solid         | L   | 0.168      | -            | -                | -                | -         |    -0.49 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            6 |     3714 | 2024-02-20 | Sharks        | W   | 0.168      | 0.143        | 0.038 (0.001)    | 0.538 (0.013)    | 0 (0.000) |     4.93 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            5 |     3808 | 2024-02-16 | Galorys       | L   | 0.141      | -            | -                | -                | -         |    -0.50 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            4 |     3820 | 2024-02-16 | LA RUGONETA   | L   | 0.139      | -            | -                | -                | -         |    -1.89 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            3 |     3845 | 2024-02-15 | Case          | L   | 0.133      | -            | -                | -                | -         |    -0.33 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            2 |     3916 | 2024-02-13 | 9z Academy    | W   | 0.121      | 0.303        | 0.000 (0.000)    | 0.075 (0.003)    | 0 (0.000) |     1.96 | ALLE, danoco, LUCAS1, sakamoto, zock9 |
|            1 |     3932 | 2024-02-12 | Fluxo         | L   | 0.112      | -            | -                | -                | -         |    -0.15 | ALLE, danoco, LUCAS1, sakamoto, zock9 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
