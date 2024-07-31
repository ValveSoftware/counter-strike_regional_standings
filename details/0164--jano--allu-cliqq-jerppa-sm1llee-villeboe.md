### Roster Details<br />
Team Name: JANO<br />
Roster: allu, Cliqq, Jerppa, Sm1llee, Villeboe<br />
Global Rank: [164](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [105]( ../standings_europe.md)<br />
<br />
Final Rank Value:  675.4<br />
<br />
Final Rank Value (675.4) = Starting Rank Value (685.4) + Head To Head Adjustments (-10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.4
- 400 + ( ( 0.138 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 685.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1424 | 2024-06-02 | FAVBET            | L   | 0.805      | -            | -                | -                | -         |    -8.84 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           14 |     1526 | 2024-05-29 | Zero Tenacity     | L   | 0.780      | -            | -                | -                | -         |    -1.96 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           13 |     2361 | 2024-04-27 | Sashi             | L   | 0.566      | -            | -                | -                | -         |    -1.06 | allu, doto, Jerppa, juho, Sm1llee      |
|           12 |     2534 | 2024-04-20 | Sangal            | L   | 0.517      | -            | -                | -                | -         |    -1.28 | allu, doto, Jerppa, juho, Sm1llee      |
|           11 |     2567 | 2024-04-19 | NOM               | W   | 0.512      | 0.143        | 0.000 (0.000)    | 0.110 (0.008)    | 0 (0.000) |     5.24 | allu, doto, Jerppa, juho, Sm1llee      |
|           10 |     2667 | 2024-04-17 | RUBY              | L   | 0.497      | -            | -                | -                | -         |    -3.04 | allu, doto, Jerppa, juho, Sm1llee      |
|            9 |     2676 | 2024-04-17 | MOUZ NXT          | L   | 0.497      | -            | -                | -                | -         |    -1.80 | allu, doto, Jerppa, juho, Sm1llee      |
|            8 |     2757 | 2024-04-12 | Zero Tenacity     | W   | 0.464      | 0.371        | 0.139 (0.024)    | 1.000 (0.172)    | 0 (0.000) |    13.10 | allu, doto, Jerppa, juho, Sm1llee      |
|            7 |     2921 | 2024-04-08 | Permitta          | L   | 0.437      | -            | -                | -                | -         |    -2.63 | allu, doto, Jerppa, juho, Sm1llee      |
|            6 |     2956 | 2024-04-06 | Johnny Speeds     | L   | 0.425      | -            | -                | -                | -         |    -0.40 | allu, doto, Jerppa, juho, Sm1llee      |
|            5 |     3021 | 2024-04-04 | Gaimin Gladiators | L   | 0.411      | -            | -                | -                | -         |    -1.65 | allu, doto, Jerppa, juho, Sm1llee      |
|            4 |     3488 | 2024-03-12 | kONO              | L   | 0.259      | -            | -                | -                | -         |    -2.71 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            3 |     3578 | 2024-03-08 | INGLORIOUS        | W   | 0.231      | 0.143        | 0.000 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     2.33 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            2 |     3688 | 2024-03-04 | Endpoint          | L   | 0.205      | -            | -                | -                | -         |    -4.89 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            1 |     3773 | 2024-02-29 | Sashi             | L   | 0.177      | -            | -                | -                | -         |    -0.37 | allu, doto, Jelo, Jerppa, Sm1llee      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($450.27)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
