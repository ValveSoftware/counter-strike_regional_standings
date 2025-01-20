### Roster Details<br />
Team Name: JOGA DE TERNO<br />
Roster: ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto<br />
Global Rank: [202](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [61]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  589.9<br />
<br />
Final Rank Value (589.9) = Starting Rank Value (619.9) + Head To Head Adjustments (-30.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.208[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.9
- 400 + ( ( 0.111 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 619.9


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
|           13 |      562 | 2024-11-26 | VELOX             | L   | 0.853      | -            | -                | -                | -         |   -15.20 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           12 |      574 | 2024-11-25 | GameHunters       | L   | 0.848      | -            | -                | -                | -         |    -9.20 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           11 |      637 | 2024-11-22 | Patins da Ferrari | W   | 0.828      | 0.371        | 0.002 (0.001)    | 0.179 (0.055)    | 0 (0.000) |    14.37 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|           10 |      697 | 2024-11-20 | LaChampionsLiga   | W   | 0.813      | 0.371        | 0.009 (0.003)    | 0.124 (0.037)    | 0 (0.000) |    13.16 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            9 |      706 | 2024-11-19 | 2070              | L   | 0.808      | -            | -                | -                | -         |   -10.57 | ALENNNCAR, BALEROSTYLE, BRNZ1K, Lukita, sakamoto |
|            8 |     1036 | 2024-11-05 | 9z Academy        | L   | 0.713      | -            | -                | -                | -         |   -13.35 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            7 |     1051 | 2024-11-04 | ex-Vikings        | L   | 0.707      | -            | -                | -                | -         |    -7.21 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            6 |     1114 | 2024-11-01 | GameHunters       | L   | 0.688      | -            | -                | -                | -         |    -8.54 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            5 |     1135 | 2024-10-31 | paiN Academy      | W   | 0.681      | 0.371        | 0.000 (0.000)    | 0.116 (0.029)    | 0 (0.000) |     5.00 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            4 |     1180 | 2024-10-29 | BESTIA Academy    | W   | 0.667      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.75 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            3 |     1960 | 2024-09-27 | Fluxo             | L   | 0.453      | -            | -                | -                | -         |    -1.06 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            2 |     3802 | 2024-08-03 | Sharks Youngsters | L   | 0.087      | -            | -                | -                | -         |    -1.44 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |
|            1 |     3871 | 2024-08-01 | KRÜ               | L   | 0.074      | -            | -                | -                | -         |    -0.68 | BRNZ1K, lealziNho, Lukita, sakamoto, swarmyzz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34.76)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
