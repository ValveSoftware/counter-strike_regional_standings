### Roster Details<br />
Team Name: JOGA DE TERNO<br />
Roster: ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto<br />
Global Rank: [204](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_31.md)<br />
Regional Rank: [62]( ../../standings_americas_2024_12_31.md)<br />
<br />
Final Rank Value:  586.8<br />
<br />
Final Rank Value (586.8) = Starting Rank Value (625.1) + Head To Head Adjustments (-38.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.220[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.1
- 400 + ( ( 0.116 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 625.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      502 | 2024-11-26 | VELOX             | L   | 0.981      | -            | -                | -                | -         |   -17.22 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           12 |      514 | 2024-11-25 | GameHunters       | L   | 0.975      | -            | -                | -                | -         |   -10.41 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           11 |      577 | 2024-11-22 | Patins da Ferrari | W   | 0.955      | 0.371        | 0.003 (0.001)    | 0.194 (0.069)    | 0 (0.000) |    16.76 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           10 |      637 | 2024-11-20 | LaChampionsLiga   | W   | 0.940      | 0.371        | 0.009 (0.003)    | 0.119 (0.042)    | 0 (0.000) |    14.53 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            9 |      646 | 2024-11-19 | 2070              | L   | 0.935      | -            | -                | -                | -         |   -12.40 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            8 |      976 | 2024-11-05 | 9z Academy        | L   | 0.840      | -            | -                | -                | -         |   -15.68 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            7 |      991 | 2024-11-04 | Vikings KR        | L   | 0.835      | -            | -                | -                | -         |    -8.49 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            6 |     1054 | 2024-11-01 | GameHunters       | L   | 0.815      | -            | -                | -                | -         |   -10.21 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            5 |     1075 | 2024-10-31 | paiN Academy      | W   | 0.808      | 0.371        | 0.000 (0.000)    | 0.117 (0.035)    | 0 (0.000) |     5.83 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            4 |     1120 | 2024-10-29 | BESTIA Academy    | W   | 0.794      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.58 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            3 |     1900 | 2024-09-27 | Fluxo             | L   | 0.581      | -            | -                | -                | -         |    -1.30 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            2 |     3742 | 2024-08-03 | Sharks Youngsters | L   | 0.214      | -            | -                | -                | -         |    -3.51 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            1 |     3811 | 2024-08-01 | KRÜ               | L   | 0.201      | -            | -                | -                | -         |    -1.76 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($85.68)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
