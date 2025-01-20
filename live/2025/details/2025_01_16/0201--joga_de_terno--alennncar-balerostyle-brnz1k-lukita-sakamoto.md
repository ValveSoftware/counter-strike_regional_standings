### Roster Details<br />
Team Name: JOGA DE TERNO<br />
Roster: ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto<br />
Global Rank: [201](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_16.md)<br />
Regional Rank: [61]( ../../standings_americas_2025_01_16.md)<br />
<br />
Final Rank Value:  592.7<br />
<br />
Final Rank Value (592.7) = Starting Rank Value (621.0) + Head To Head Adjustments (-28.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.209[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 621.0
- 400 + ( ( 0.112 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 621.0


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
|           13 |      585 | 2024-11-26 | VELOX             | L   | 0.859      | -            | -                | -                | -         |   -15.32 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           12 |      597 | 2024-11-25 | GameHunters       | L   | 0.854      | -            | -                | -                | -         |    -8.87 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           11 |      660 | 2024-11-22 | Patins da Ferrari | W   | 0.834      | 0.371        | 0.002 (0.001)    | 0.220 (0.068)    | 0 (0.000) |    15.08 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           10 |      720 | 2024-11-20 | LaChampionsLiga   | W   | 0.819      | 0.371        | 0.009 (0.003)    | 0.124 (0.037)    | 0 (0.000) |    13.06 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            9 |      729 | 2024-11-19 | 2070              | L   | 0.814      | -            | -                | -                | -         |    -9.71 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            8 |     1059 | 2024-11-05 | 9z Academy        | L   | 0.719      | -            | -                | -                | -         |   -13.50 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            7 |     1074 | 2024-11-04 | UNO MILLE         | L   | 0.713      | -            | -                | -                | -         |    -7.30 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            6 |     1137 | 2024-11-01 | GameHunters       | L   | 0.694      | -            | -                | -                | -         |    -8.23 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            5 |     1158 | 2024-10-31 | paiN Academy      | W   | 0.687      | 0.371        | 0.000 (0.000)    | 0.116 (0.029)    | 0 (0.000) |     5.02 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            4 |     1203 | 2024-10-29 | BESTIA Academy    | W   | 0.673      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.77 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            3 |     1983 | 2024-09-27 | Fluxo             | L   | 0.460      | -            | -                | -                | -         |    -1.08 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            2 |     3825 | 2024-08-03 | Sharks Youngsters | L   | 0.093      | -            | -                | -                | -         |    -1.54 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            1 |     3894 | 2024-08-01 | KRÜ               | L   | 0.080      | -            | -                | -                | -         |    -0.74 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37.21)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
