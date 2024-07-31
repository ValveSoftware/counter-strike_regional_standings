### Roster Details<br />
Team Name: Astralis W<br />
Roster: anja, aurora, Ismo, josefine, marie<br />
Global Rank: [183](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [117]( ../standings_europe.md)<br />
<br />
Final Rank Value:  606.1<br />
<br />
Final Rank Value (606.1) = Starting Rank Value (625.8) + Head To Head Adjustments (-19.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.178[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.8
- 400 + ( ( 0.109 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 625.8


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
|           12 |     2555 | 2024-04-19 | ENCE Athena       | L   | 0.513      | -            | -                | -                | -         |    -7.56 | anja, aurora, Ismo, josefine, marie |
|           11 |     2726 | 2024-04-14 | NAVI Javelins     | L   | 0.478      | -            | -                | -                | -         |    -3.56 | anja, aurora, Ismo, josefine, marie |
|           10 |     2735 | 2024-04-13 | NIP Impact        | L   | 0.473      | -            | -                | -                | -         |    -5.17 | anja, aurora, Ismo, josefine, marie |
|            9 |     2754 | 2024-04-12 | Permitta W        | W   | 0.465      | 0.303        | 0.000 (0.000)    | 0.017 (0.002)    | 0 (0.000) |     5.06 | anja, aurora, Ismo, josefine, marie |
|            8 |     2775 | 2024-04-11 | Imperial fe       | L   | 0.459      | -            | -                | -                | -         |    -1.16 | anja, aurora, Ismo, josefine, marie |
|            7 |     2822 | 2024-04-10 | Imperial fe       | L   | 0.452      | -            | -                | -                | -         |    -1.15 | anja, aurora, Ismo, josefine, marie |
|            6 |     2902 | 2024-04-08 | Permitta W        | W   | 0.439      | 0.303        | 0.000 (0.000)    | 0.017 (0.002)    | 0 (0.000) |     4.73 | anja, aurora, Ismo, josefine, marie |
|            5 |     3048 | 2024-04-03 | NIP Impact        | L   | 0.406      | -            | -                | -                | -         |    -4.85 | anja, aurora, Ismo, josefine, marie |
|            4 |     3267 | 2024-03-21 | ex-GUILD fe       | L   | 0.320      | -            | -                | -                | -         |    -4.53 | anja, aurora, Ismo, josefine, marie |
|            3 |     3624 | 2024-03-06 | BIG EQUIPA        | L   | 0.220      | -            | -                | -                | -         |    -2.06 | anja, aurora, Ismo, josefine, marie |
|            2 |     4003 | 2024-02-18 | dream catchers fe | W   | 0.107      | 0.143        | 0.016 (0.000)    | 0.170 (0.003)    | 0 (0.000) |     2.11 | anja, aurora, Ismo, josefine, marie |
|            1 |     4007 | 2024-02-18 | Spirit fe         | L   | 0.106      | -            | -                | -                | -         |    -1.50 | anja, aurora, Ismo, josefine, marie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($447.41)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
