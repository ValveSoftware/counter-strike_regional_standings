### Roster Details<br />
Team Name: Flamengo<br />
Roster: Alisson, ALLE, caike, danoco, zock9<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [198](../standings_global.md)<br />
Regional Rank: [54]( ../standings_americas.md)<br />
Final Rank Value:  507.9<br />
<br />
Final Rank Value (507.9) = Starting Rank Value (512.3) + Head To Head Adjustments (-4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.3
- 400 + ( ( 0.052 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 512.3


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
|           12 |     2885 | 2024-03-14 | MIBR Academy  | L   | 0.368      | -            | -                | -                | -         |    -5.50 | Alisson, ALLE, caike, danoco, zock9   |
|           11 |     2891 | 2024-03-14 | RED Canids    | L   | 0.367      | -            | -                | -                | -         |    -0.27 | Alisson, ALLE, caike, danoco, zock9   |
|           10 |     2964 | 2024-03-11 | MIBR Academy  | W   | 0.349      | 0.303        | 0.001 (0.000)    | 0.045 (0.005)    | 0 (0.000) |     5.79 | Alisson, ALLE, caike, danoco, zock9   |
|            9 |     2990 | 2024-03-10 | FURIA Academy | L   | 0.341      | -            | -                | -                | -         |    -5.02 | Alisson, ALLE, danoco, voltera, zock9 |
|            8 |     3040 | 2024-03-08 | adalYamigos   | L   | 0.327      | -            | -                | -                | -         |    -3.32 | Alisson, ALLE, danoco, voltera, zock9 |
|            7 |     3423 | 2024-02-20 | Solid         | L   | 0.215      | -            | -                | -                | -         |    -0.59 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            6 |     3426 | 2024-02-20 | Sharks        | W   | 0.215      | 0.143        | 0.046 (0.001)    | 0.501 (0.015)    | 0 (0.000) |     6.35 | Alisson, ALLE, danoco, LUCAS1, zock9  |
|            5 |     3520 | 2024-02-16 | Galorys       | L   | 0.188      | -            | -                | -                | -         |    -0.61 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            4 |     3532 | 2024-02-16 | LA RUGONETA   | L   | 0.187      | -            | -                | -                | -         |    -2.45 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            3 |     3557 | 2024-02-15 | Case          | L   | 0.180      | -            | -                | -                | -         |    -0.41 | ALLE, danoco, LUCAS1, ph1, zock9      |
|            2 |     3628 | 2024-02-13 | 9z Academy    | W   | 0.168      | 0.303        | 0.000 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     1.84 | ALLE, danoco, LUCAS1, sakamoto, zock9 |
|            1 |     3644 | 2024-02-12 | Fluxo         | L   | 0.160      | -            | -                | -                | -         |    -0.21 | ALLE, danoco, LUCAS1, sakamoto, zock9 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
