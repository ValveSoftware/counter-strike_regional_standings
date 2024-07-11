### Roster Details<br />
Team Name: FURIA Academy<br />
Roster: cerolzin, GYZER, kye, mello, zmb<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [188](../standings_global.md)<br />
Regional Rank: [50]( ../standings_americas.md)<br />
Final Rank Value:  544.9<br />
<br />
Final Rank Value (544.9) = Starting Rank Value (531.1) + Head To Head Adjustments (13.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.1
- 400 + ( ( 0.062 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 531.1


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
|           11 |     2087 | 2024-04-11 | Case        | L   | 0.593      | -            | -                | -                | -         |    -2.61 | cerolzin, GYZER, kye, mello, zmb      |
|           10 |     2242 | 2024-04-07 | Imperial    | L   | 0.567      | -            | -                | -                | -         |    -0.09 | Bruninho, cerolzin, GYZER, kye, mello |
|            9 |     2726 | 2024-03-14 | Case        | L   | 0.407      | -            | -                | -                | -         |    -1.75 | Bruninho, cerolzin, GYZER, kye, mello |
|            8 |     2786 | 2024-03-12 | Solid       | W   | 0.394      | 0.303        | 0.048 (0.006)    | 0.585 (0.070)    | 0 (0.000) |    10.95 | Bruninho, cerolzin, GYZER, kye, mello |
|            7 |     2799 | 2024-03-11 | BESTIA      | L   | 0.389      | -            | -                | -                | -         |    -0.83 | Bruninho, cerolzin, GYZER, kye, mello |
|            6 |     2824 | 2024-03-10 | Case        | L   | 0.381      | -            | -                | -                | -         |    -1.46 | Bruninho, cerolzin, GYZER, kye, mello |
|            5 |     2826 | 2024-03-10 | Flamengo    | W   | 0.381      | 0.435        | 0.000 (0.000)    | 0.035 (0.006)    | 0 (0.000) |     5.59 | Bruninho, cerolzin, GYZER, kye, mello |
|            4 |     2870 | 2024-03-08 | BESTIA      | L   | 0.368      | -            | -                | -                | -         |    -0.73 | Bruninho, cerolzin, GYZER, kye, mello |
|            3 |     3312 | 2024-02-18 | BESTIA      | L   | 0.240      | -            | -                | -                | -         |    -0.49 | Bruninho, cerolzin, GYZER, kye, mello |
|            2 |     3363 | 2024-02-16 | Dusty Roots | W   | 0.227      | 0.435        | 0.010 (0.001)    | 0.155 (0.015)    | 0 (0.000) |     5.62 | Bruninho, cerolzin, GYZER, kye, mello |
|            1 |     3474 | 2024-02-12 | BESTIA      | L   | 0.202      | -            | -                | -                | -         |    -0.39 | Bruninho, cerolzin, GYZER, kye, mello |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
