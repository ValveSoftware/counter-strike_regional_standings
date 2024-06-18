### Roster Details<br />
Team Name: Dusty Roots<br />
Roster: alexer, maxxkor, OwensinhoM, tom1jed, zock<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [141](../standings_global.md)<br />
Regional Rank: [40]( ../standings_americas.md)<br />
Final Rank Value:  737.8<br />
<br />
Final Rank Value (737.8) = Starting Rank Value (740.7) + Head To Head Adjustments (-2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.104[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 740.7
- 400 + ( ( 0.168 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 740.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |        1 | 2024-06-17 | inSanitY      | L   | 1.000      | -            | -                | -                | -         |    -8.16 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|           10 |      322 | 2024-06-08 | paiN          | L   | 1.000      | -            | -                | -                | -         |    -0.57 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            9 |      415 | 2024-06-06 | Vikings KR    | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.239 (0.092)    | 0 (0.000) |    14.74 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            8 |      476 | 2024-06-05 | LA RUGONETA   | W   | 1.000      | 0.284        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     8.22 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            7 |      578 | 2024-06-02 | 9z Academy    | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.036 (0.014)    | 0 (0.000) |     4.58 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            6 |      650 | 2024-05-31 | FURIA Academy | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.087 (0.034)    | 0 (0.000) |     8.98 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            5 |      694 | 2024-05-29 | Case          | L   | 1.000      | -            | -                | -                | -         |    -8.52 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            4 |      753 | 2024-05-27 | Galorys       | L   | 1.000      | -            | -                | -                | -         |    -9.60 | alexer, maxxkor, OwensinhoM, tom1jed, zock |
|            3 |     3230 | 2024-02-16 | FURIA Academy | L   | 0.383      | -            | -                | -                | -         |    -8.97 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |
|            2 |     3346 | 2024-02-12 | Case          | L   | 0.356      | -            | -                | -                | -         |    -3.61 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |
|            1 |     4015 | 2024-01-15 | paiN          | L   | 0.171      | -            | -                | -                | -         |    -0.04 | alexer, guishu, KvNs, maxxkor, OwensinhoM  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,545.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-17 |      1.000 | $545.00        | $545.00         |
| 2024-06-05 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
