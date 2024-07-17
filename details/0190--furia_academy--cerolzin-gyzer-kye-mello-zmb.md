### Roster Details<br />
Team Name: FURIA Academy<br />
Roster: cerolzin, GYZER, kye, mello, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [190](../standings_global.md)<br />
Regional Rank: [50]( ../standings_americas.md)<br />
Final Rank Value:  545.2<br />
<br />
Final Rank Value (545.2) = Starting Rank Value (531.4) + Head To Head Adjustments (13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.4
- 400 + ( ( 0.061 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 531.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     2251 | 2024-04-11 | Case        | L   | 0.553      | -            | -                | -                | -         |    -1.83 | cerolzin, GYZER, kye, mello, zmb      |
|           10 |     2406 | 2024-04-07 | Imperial    | L   | 0.527      | -            | -                | -                | -         |    -0.09 | Bruninho, cerolzin, GYZER, kye, mello |
|            9 |     2890 | 2024-03-14 | Case        | L   | 0.368      | -            | -                | -                | -         |    -1.16 | Bruninho, cerolzin, GYZER, kye, mello |
|            8 |     2950 | 2024-03-12 | Solid       | W   | 0.354      | 0.303        | 0.047 (0.005)    | 0.622 (0.067)    | 0 (0.000) |    10.01 | Bruninho, cerolzin, GYZER, kye, mello |
|            7 |     2963 | 2024-03-11 | BESTIA      | L   | 0.349      | -            | -                | -                | -         |    -0.68 | Bruninho, cerolzin, GYZER, kye, mello |
|            6 |     2988 | 2024-03-10 | Case        | L   | 0.342      | -            | -                | -                | -         |    -0.95 | Bruninho, cerolzin, GYZER, kye, mello |
|            5 |     2990 | 2024-03-10 | Flamengo    | W   | 0.341      | 0.435        | 0.000 (0.000)    | 0.030 (0.004)    | 0 (0.000) |     5.02 | Bruninho, cerolzin, GYZER, kye, mello |
|            4 |     3034 | 2024-03-08 | BESTIA      | L   | 0.329      | -            | -                | -                | -         |    -0.60 | Bruninho, cerolzin, GYZER, kye, mello |
|            3 |     3476 | 2024-02-18 | BESTIA      | L   | 0.201      | -            | -                | -                | -         |    -0.37 | Bruninho, cerolzin, GYZER, kye, mello |
|            2 |     3527 | 2024-02-16 | Dusty Roots | W   | 0.187      | 0.435        | 0.010 (0.001)    | 0.191 (0.016)    | 0 (0.000) |     4.79 | Bruninho, cerolzin, GYZER, kye, mello |
|            1 |     3638 | 2024-02-12 | BESTIA      | L   | 0.162      | -            | -                | -                | -         |    -0.29 | Bruninho, cerolzin, GYZER, kye, mello |

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
