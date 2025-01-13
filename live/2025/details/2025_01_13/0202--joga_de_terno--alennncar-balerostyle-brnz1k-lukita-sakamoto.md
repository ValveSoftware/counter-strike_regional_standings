### Roster Details<br />
Team Name: JOGA DE TERNO<br />
Roster: ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto<br />
Global Rank: [202](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_13.md)<br />
Regional Rank: [61]( ../../standings_americas_2025_01_13.md)<br />
<br />
Final Rank Value:  591.0<br />
<br />
Final Rank Value (591.0) = Starting Rank Value (623.0) + Head To Head Adjustments (-32.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 623.0
- 400 + ( ( 0.112 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 623.0


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
|           13 |      558 | 2024-11-26 | VELOX             | L   | 0.882      | -            | -                | -                | -         |   -15.69 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           12 |      570 | 2024-11-25 | GameHunters       | L   | 0.876      | -            | -                | -                | -         |    -9.48 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           11 |      633 | 2024-11-22 | Patins da Ferrari | W   | 0.856      | 0.371        | 0.002 (0.001)    | 0.180 (0.057)    | 0 (0.000) |    14.90 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           10 |      693 | 2024-11-20 | LaChampionsLiga   | W   | 0.841      | 0.371        | 0.009 (0.003)    | 0.121 (0.038)    | 0 (0.000) |    13.47 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            9 |      702 | 2024-11-19 | 2070              | L   | 0.836      | -            | -                | -                | -         |   -10.97 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            8 |     1032 | 2024-11-05 | 9z Academy        | L   | 0.741      | -            | -                | -                | -         |   -13.91 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            7 |     1047 | 2024-11-04 | ex-Vikings        | L   | 0.736      | -            | -                | -                | -         |    -7.48 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            6 |     1110 | 2024-11-01 | GameHunters       | L   | 0.716      | -            | -                | -                | -         |    -8.92 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            5 |     1131 | 2024-10-31 | paiN Academy      | W   | 0.710      | 0.371        | 0.000 (0.000)    | 0.114 (0.030)    | 0 (0.000) |     5.15 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            4 |     1176 | 2024-10-29 | BESTIA Academy    | W   | 0.695      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.89 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            3 |     1956 | 2024-09-27 | Fluxo             | L   | 0.482      | -            | -                | -                | -         |    -1.13 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            2 |     3798 | 2024-08-03 | Sharks Youngsters | L   | 0.115      | -            | -                | -                | -         |    -1.91 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            1 |     3867 | 2024-08-01 | KRÜ               | L   | 0.102      | -            | -                | -                | -         |    -0.94 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46.15)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
