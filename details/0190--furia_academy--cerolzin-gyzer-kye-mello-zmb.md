### Roster Details<br />
Team Name: FURIA Academy<br />
Roster: cerolzin, GYZER, kye, mello, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [190](../standings_global.md)<br />
Regional Rank: [51]( ../standings_americas.md)<br />
Final Rank Value:  530.9<br />
<br />
Final Rank Value (530.9) = Starting Rank Value (519.6) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.6
- 400 + ( ( 0.059 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 519.6


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
|           11 |     2539 | 2024-04-11 | Case        | L   | 0.506      | -            | -                | -                | -         |    -1.77 | cerolzin, GYZER, kye, mello, zmb      |
|           10 |     2694 | 2024-04-07 | Imperial    | L   | 0.480      | -            | -                | -                | -         |    -0.14 | Bruninho, cerolzin, GYZER, kye, mello |
|            9 |     3178 | 2024-03-14 | Case        | L   | 0.320      | -            | -                | -                | -         |    -1.06 | Bruninho, cerolzin, GYZER, kye, mello |
|            8 |     3238 | 2024-03-12 | Solid       | W   | 0.307      | 0.303        | 0.037 (0.003)    | 0.791 (0.074)    | 0 (0.000) |     8.63 | Bruninho, cerolzin, GYZER, kye, mello |
|            7 |     3251 | 2024-03-11 | BESTIA      | L   | 0.302      | -            | -                | -                | -         |    -0.54 | Bruninho, cerolzin, GYZER, kye, mello |
|            6 |     3276 | 2024-03-10 | Case        | L   | 0.295      | -            | -                | -                | -         |    -0.88 | Bruninho, cerolzin, GYZER, kye, mello |
|            5 |     3278 | 2024-03-10 | Flamengo    | W   | 0.294      | 0.435        | 0.000 (0.000)    | 0.024 (0.003)    | 0 (0.000) |     4.35 | Bruninho, cerolzin, GYZER, kye, mello |
|            4 |     3322 | 2024-03-08 | BESTIA      | L   | 0.282      | -            | -                | -                | -         |    -0.48 | Bruninho, cerolzin, GYZER, kye, mello |
|            3 |     3764 | 2024-02-18 | BESTIA      | L   | 0.153      | -            | -                | -                | -         |    -0.26 | Bruninho, cerolzin, GYZER, kye, mello |
|            2 |     3815 | 2024-02-16 | Dusty Roots | W   | 0.140      | 0.435        | 0.008 (0.001)    | 0.268 (0.016)    | 0 (0.000) |     3.67 | Bruninho, cerolzin, GYZER, kye, mello |
|            1 |     3926 | 2024-02-12 | BESTIA      | L   | 0.115      | -            | -                | -                | -         |    -0.19 | Bruninho, cerolzin, GYZER, kye, mello |

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
