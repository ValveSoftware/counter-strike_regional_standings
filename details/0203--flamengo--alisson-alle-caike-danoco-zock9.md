### Roster Details<br />
Team Name: Flamengo<br />
Roster: Alisson, ALLE, caike, danoco, zock9<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [203](../standings_global.md)<br />
Regional Rank: [55]( ../standings_americas.md)<br />
Final Rank Value:  512.8<br />
<br />
Final Rank Value (512.8) = Starting Rank Value (513.2) + Head To Head Adjustments (-0.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.2
- 400 + ( ( 0.056 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 513.2


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
|           12 |     2588 | 2024-03-14 | MIBR Academy  | L   | 0.563      | -            | -                | -                | -         |    -6.06 | Alisson, ALLE, caike, danoco, zock9   |
|           11 |     2594 | 2024-03-14 | RED Canids    | L   | 0.562      | -            | -                | -                | -         |    -0.47 | Alisson, ALLE, caike, danoco, zock9   |
|           10 |     2667 | 2024-03-11 | MIBR Academy  | W   | 0.544      | 0.303        | 0.001 (0.000)    | 0.066 (0.011)    | 0 (0.000) |    11.32 | Alisson, ALLE, caike, danoco, zock9   |
|            9 |     2693 | 2024-03-10 | FURIA Academy | L   | 0.537      | -            | -                | -                | -         |    -7.54 | Alisson, ALLE, danoco, voltera, zock9 |
|            8 |     2743 | 2024-03-08 | adalYamigos   | L   | 0.523      | -            | -                | -                | -         |    -4.09 | Alisson, ALLE, danoco, voltera, zock9 |
|            7 |     3126 | 2024-02-20 | Solid         | L   | 0.410      | -            | -                | -                | -         |    -1.34 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            6 |     3129 | 2024-02-20 | Sharks        | W   | 0.410      | 0.143        | 0.044 (0.003)    | 0.429 (0.025)    | 0 (0.000) |    12.08 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            5 |     3223 | 2024-02-16 | Galorys       | L   | 0.384      | -            | -                | -                | -         |    -1.53 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            4 |     3235 | 2024-02-16 | LA RUGONETA   | L   | 0.382      | -            | -                | -                | -         |    -4.88 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            3 |     3260 | 2024-02-15 | Case          | L   | 0.376      | -            | -                | -                | -         |    -1.36 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            2 |     3331 | 2024-02-13 | 9z Academy    | W   | 0.364      | 0.303        | 0.000 (0.000)    | 0.036 (0.004)    | 0 (0.000) |     3.96 | ALLE, danoco, LUCAS1, sakamoto, zock9 |
|            1 |     3347 | 2024-02-12 | Fluxo         | L   | 0.355      | -            | -                | -                | -         |    -0.52 | ALLE, danoco, LUCAS1, sakamoto, zock9 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
