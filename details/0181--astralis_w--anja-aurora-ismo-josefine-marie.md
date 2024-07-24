### Roster Details<br />
Team Name: Astralis W<br />
Roster: anja, aurora, Ismo, josefine, marie<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [181](../standings_global.md)<br />
Regional Rank: [114]( ../standings_europe.md)<br />
Final Rank Value:  608.3<br />
<br />
Final Rank Value (608.3) = Starting Rank Value (629.5) + Head To Head Adjustments (-21.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.5
- 400 + ( ( 0.113 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 629.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2313 | 2024-04-19 | ENCE Athena       | L   | 0.560      | -            | -                | -                | -         |    -8.26 | anja, aurora, Ismo, josefine, marie |
|           11 |     2484 | 2024-04-14 | NAVI Javelins     | L   | 0.526      | -            | -                | -                | -         |    -3.75 | anja, aurora, Ismo, josefine, marie |
|           10 |     2493 | 2024-04-13 | NIP Impact        | L   | 0.520      | -            | -                | -                | -         |    -5.54 | anja, aurora, Ismo, josefine, marie |
|            9 |     2512 | 2024-04-12 | Permitta W        | W   | 0.512      | 0.303        | 0.000 (0.000)    | 0.020 (0.003)    | 0 (0.000) |     5.54 | anja, aurora, Ismo, josefine, marie |
|            8 |     2533 | 2024-04-11 | Imperial fe       | L   | 0.507      | -            | -                | -                | -         |    -1.12 | anja, aurora, Ismo, josefine, marie |
|            7 |     2580 | 2024-04-10 | Imperial fe       | L   | 0.500      | -            | -                | -                | -         |    -1.12 | anja, aurora, Ismo, josefine, marie |
|            6 |     2660 | 2024-04-08 | Permitta W        | W   | 0.487      | 0.303        | 0.000 (0.000)    | 0.020 (0.003)    | 0 (0.000) |     5.20 | anja, aurora, Ismo, josefine, marie |
|            5 |     2806 | 2024-04-03 | NIP Impact        | L   | 0.453      | -            | -                | -                | -         |    -5.33 | anja, aurora, Ismo, josefine, marie |
|            4 |     3025 | 2024-03-21 | ex-GUILD fe       | L   | 0.367      | -            | -                | -                | -         |    -5.19 | anja, aurora, Ismo, josefine, marie |
|            3 |     3382 | 2024-03-06 | BIG EQUIPA        | L   | 0.267      | -            | -                | -                | -         |    -2.41 | anja, aurora, Ismo, josefine, marie |
|            2 |     3761 | 2024-02-18 | dream catchers fe | W   | 0.154      | 0.143        | 0.019 (0.000)    | 0.182 (0.004)    | 0 (0.000) |     3.03 | anja, aurora, Ismo, josefine, marie |
|            1 |     3765 | 2024-02-18 | Spirit fe         | L   | 0.153      | -            | -                | -                | -         |    -2.27 | anja, aurora, Ismo, josefine, marie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($487.60)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
